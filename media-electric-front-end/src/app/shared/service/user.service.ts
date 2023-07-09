import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SERVER_API_URL} from "./base/appconfig.service";
import {RestfulBaseService} from "./base/restfulBase.service";

@Injectable({
  providedIn: "root"
})
export class UserService extends RestfulBaseService {
  public BASE_URL = SERVER_API_URL + '/users';

  constructor(
    protected override _http: HttpClient,
    protected override _router: Router
  ) {
    super(SERVER_API_URL + '/users', _http, _router);
  }

}
