import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../service/base/appconfig.service";


export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url || (/^https/.test(request.url))) {
            return next.handle(request);
        }

        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                },
                headers: request.headers.set('Cache-Control', 'no-cache')
                    .set('Pragma', 'no-cache')
            });
        }
        return next.handle(request);
    }

}
