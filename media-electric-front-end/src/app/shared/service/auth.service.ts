import {Injectable} from "@angular/core";
import {catchError, map, Observable, Observer, Subject, tap} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BaseService} from "./base/base.service";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "./base/appconfig.service";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: "root"
})
export class AuthService extends BaseService {
  private BASE_URL = SERVER_API_URL + '/auth';

  authenticatedSubject = new Subject<boolean>();

  constructor(
    private _http: HttpClient,
    protected override _router: Router,
    private _localStorage: LocalStorageService,
    private _sessionStorage: SessionStorageService
  ) {
    super(_router);
  }

  getToken() {
    return this._localStorage.retrieve('authenticationToken') || this._sessionStorage.retrieve('authenticationToken');
  }

  saveToken(token: string) {
    this._localStorage.store('authenticationToken', token) || this._sessionStorage.store('authenticationToken', token);
  }

  login(credentials: { username: string, password: string }, rememberMe: boolean): Observable<any> {
    const _this = this;

    return this._http.post(this.BASE_URL + '/login', credentials, {observe: 'response'})
      .pipe(catchError(this.handleError))
      .pipe(tap(saveUserSession))
      .pipe(map(authenticateSuccess.bind(_this)));

    function authenticateSuccess(resp: any) {
      const jwt = resp.body.token;
      _this._localStorage.store("authenticationToken", jwt);
      _this.storeAuthenticationToken(jwt, rememberMe);
      return jwt;
    }

    function saveUserSession(resp: any) {
      const jwt = resp.body.token;
      const claims = _this.getDecodedAccessToken(jwt);
      console.log(claims)
      // _this._sessionStorage.store("user", claims);
      // _this._localStorage.store("user", claims);
      _this.authenticatedSubject.next(true);
    }
  }

  signUp(body: { email: string, username: string, password: string, gender: number, phone: string }): Observable<HttpResponse<any>> {
    return this._http.post(this.BASE_URL + '/signup', body, {
      observe: 'response', responseType: 'text'
    })
      .pipe(catchError(this.handleError))
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
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

  storeAuthenticationToken(jwt: string, rememberMe: boolean) {
    if (rememberMe) {
      this._localStorage.store('authenticationToken', jwt);
    } else {
      this._sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    this.authenticatedSubject.next(false);
    this._sessionStorage.clear("user");
    this._localStorage.clear("user");
    this._sessionStorage.clear("authenticationToken");
    this._localStorage.clear("authenticationToken");
    return this._http.post(SERVER_API_URL + '/auth/logout', {token: this.getToken()}, {
      observe: 'response',
      responseType: 'text'
    });
  }

}
