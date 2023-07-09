import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError} from "rxjs";
import {BaseService} from "./base.service";

export class RestfulBaseService extends BaseService{

  constructor(protected _baseUrl: string,
              protected _http: HttpClient,
              protected override _router: Router) {
    super(_router);
  }

  public getAll() {
    return this._http.get<HttpResponse<any>>(`${this._baseUrl}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  getById(id: number) {
    return this._http.get<HttpResponse<any>>(`${this._baseUrl}/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  insert(body: any) {
    return this._http.post<HttpResponse<any>>(`${this._baseUrl}`, body, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  update(body: any) {
    return this._http.put<HttpResponse<any>>(`${this._baseUrl}`, body, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  patch(body: any) {
    return this._http.patch<HttpResponse<any>>(`${this._baseUrl}`, body, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  delete(id: number) {
    return this._http.delete<HttpResponse<any>>(`${this._baseUrl}/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }
}
