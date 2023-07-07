import {Injectable} from "@angular/core";
import {BaseService} from "./base/base.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "./base/appconfig.service";
import {catchError} from "rxjs";
import {ArticleInsertDto} from "../dto/article/article-insert.dto";
import {CategoryInsertDto} from "../dto/category/category-insert.dto";

@Injectable({
  providedIn: "root"
})
export class CategoryService extends BaseService {
  constructor(
    private http: HttpClient,
    public route: Router
  ) {
    super(route);
  }

  BASE_URL = SERVER_API_URL + '/Category';

  getAllCategories() {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetAllCategories`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  getCategory(id: number) {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetCategory/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  create(category: CategoryInsertDto) {
    return this.http.post<HttpResponse<any>>(`${this.BASE_URL}/Create`, category, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  update(id: number, category: CategoryInsertDto) {
    return this.http.post<HttpResponse<any>>(`${this.BASE_URL}/Update/${id}`, category, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  changeStatus(id: number) {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/ChangeStatus/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  delete(id: number) {
    return this.http.delete<HttpResponse<any>>(`${this.BASE_URL}/Remove/${id}`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }
}
