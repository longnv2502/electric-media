import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {catchError, map, Observable, Observer, Subject, switchMap, tap} from "rxjs";
import {SERVER_API_URL} from "../service/appconfig.service";
import {Injectable} from "@angular/core";
import {BaseService} from "../service/base.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class AuthServerProvider extends BaseService {

  // private END_POINT_PATH = '/sse-server'
  private END_POINT_PATH = '/auth';

  authenticatedSubject = new Subject<boolean>();

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    private http: HttpClient,
    public route: Router,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) {
    super(route);
  }

  getToken() {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }

  saveToken(token: string) {
    this.$localStorage.store('authenticationToken', token) || this.$sessionStorage.store('authenticationToken', token);
  }

  login(credentials: { username: string, password: string }, rememberMe: boolean): Observable<any> {
    const _this = this;

    return this.http.post(SERVER_API_URL + this.END_POINT_PATH + '/login', credentials, {observe: 'response'})
      .pipe(catchError(this.handleError))
      .pipe(tap(saveUserSession))
      .pipe(map(authenticateSuccess.bind(_this)));

    function authenticateSuccess(resp: any) {
      const jwt = resp.body.authenticationToken;
      _this.$localStorage.store("authenticationToken", jwt);
      _this.storeAuthenticationToken(jwt, rememberMe);
      return jwt;
    }

    function saveUserSession(resp: any) {
      const username = resp.body.username;
      _this.find(username).subscribe({
        next: value => {
          _this.$sessionStorage.store("user", value.body);
          _this.$localStorage.store("user", value.body);
          console.log()
          console.log(value.body)
          _this.authenticatedSubject.next(true);
        },
        error: catchError
      })
    }
  }

  signUp(body: { email: string, username: string, password: string, gender: number, phone: string }): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + this.END_POINT_PATH + '/signup', body, {
      observe: 'response',
      responseType: 'text'
    })
      .pipe(catchError(this.handleError))
      .pipe(switchMap(resp => this.sendOtp(body.phone)));
  }

  sendOtp(phone: string): Observable<HttpResponse<any>> {
    return this.http.get(SERVER_API_URL + '/phoneNumber/generateOTP/' + phone, {
      observe: 'response',
      responseType: 'text'
    })
      .pipe(catchError(this.handleError));
  }

  verifyOtp(phone: number, otp: number): Observable<HttpResponse<any>> {
    return this.http.get(SERVER_API_URL + '/phoneNumber/verifyOTP' + `/${phone}` + `/${otp}`, {
      observe: 'response',
      responseType: 'text'
    })
      .pipe(catchError(this.handleError));
  }

  loginWithToken(jwt: string, rememberMe: boolean): Observable<HttpResponse<any>> {
    return Observable.create((observer: Observer<any>) => {
      if (jwt) {
        this.storeAuthenticationToken(jwt, rememberMe);
        observer.next(jwt);
      } else {
        observer.next('auth-jwt-service Promise reject'); // Put appropriate error message here
      }
      observer.complete();
    });
  }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get(SERVER_API_URL + '/account', {observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  update(user: any): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + '/account/update', user, {observe: 'response', responseType: 'text'})
      .pipe(catchError(this.handleError));
  }

  find(username: string): Observable<HttpResponse<any>> {
    return this.http.get(SERVER_API_URL + '/account/find?username=' + username, {observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  changeStatus(id: number) {
    return this.http.get(SERVER_API_URL + '/account/changeStatus/' + id, {observe: 'response', responseType: 'text'})
      .pipe(catchError(this.handleError));
  }


  storeAuthenticationToken(jwt: string, rememberMe: boolean) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    this.authenticatedSubject.next(false);
    this.$sessionStorage.clear("user");
    this.$localStorage.clear("user");
    this.$sessionStorage.clear("authenticationToken");
    this.$localStorage.clear("authenticationToken");
    return this.http.post(SERVER_API_URL + '/auth/logout', {token: this.getToken()}, {observe: 'response', responseType: 'text'});
  }


}
