import {BaseService} from "./base/base.service";
import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "./base/appconfig.service";
import {catchError} from "rxjs";
import {ArticleInsertDto} from "../dto/article/article-insert.dto";

@Injectable({
  providedIn: "root"
})
export class ArticleService extends BaseService {
  constructor(
    private http: HttpClient,
    public route: Router
  ) {
    super(route);
  }

  BASE_URL = SERVER_API_URL + '/Article';

  getAllArticle() {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetAllArticle`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  getAllArticleByUserId(userId: number) {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetAllArticleByUserId/${userId}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  getArticle(id: number) {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetArticle/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  addArticle(article: ArticleInsertDto) {
    return this.http.post<HttpResponse<any>>(`${this.BASE_URL}/AddArticle`, article, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  updateArticle(article: any) {
    return this.http.put<HttpResponse<any>>(`${this.BASE_URL}/UpdateArticle`, article, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  changeStatus(id: number) {
    return this.http.put<HttpResponse<any>>(`${this.BASE_URL}/ChangeStatus/${id}`, null, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  deleteArticle(id: number) {
    return this.http.delete<HttpResponse<any>>(`${this.BASE_URL}/DeleteArticle/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }
}
