import {Injectable} from "@angular/core";
import {catchError, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BaseService} from "../service/base.service";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "../service/appconfig.service";

@Injectable({
  providedIn: "root"
})
export class AuthService extends BaseService {
  private END_POINT_PATH = '/auth';

  constructor(
    private http: HttpClient,
    public route: Router
  ) {
    super(route);
  }

  getRequest(): Observable<HttpResponse<any>> {
    return this.http.get(SERVER_API_URL + this.END_POINT_PATH + '', {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  postRequest(): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + this.END_POINT_PATH + '', null, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }
}
