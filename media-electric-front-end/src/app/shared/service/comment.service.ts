import {Injectable} from "@angular/core";
import {BaseService} from "./base/base.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "./base/appconfig.service";
import {catchError} from "rxjs";
import {CommentInsertDto} from "../dto/comment/comment-insert.dto";

@Injectable({
  providedIn: "root"
})
export class CommentService extends BaseService {
  constructor(
    private http: HttpClient,
    public route: Router
  ) {
    super(route);
  }

  BASE_URL = SERVER_API_URL + '/Comment';

  getAllCommentsFromArticle() {
    return this.http.get<HttpResponse<any>>(`${this.BASE_URL}/GetAllCommentsFromArticle`, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

  createNewComment(comment: CommentInsertDto) {
    return this.http.post<HttpResponse<any>>(`${this.BASE_URL}/CreateNewComment`, comment, {observe: 'response'})
      .pipe(catchError((err) => this.handleError(err)));
  }

}
