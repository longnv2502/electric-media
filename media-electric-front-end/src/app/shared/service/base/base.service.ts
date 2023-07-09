import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {throwError} from "rxjs";

export class BaseService {

    constructor(protected _router: Router) { }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);

      switch (error.status) {
        case 0:
            this._router.navigate(['/unreachable-server']);
            break;
        case 400:
          this._router.navigate(['/not-found']);
          break;
        case 403:
          this._router.navigate(['/access-denied']);
          break;
      }
    }
    // return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
