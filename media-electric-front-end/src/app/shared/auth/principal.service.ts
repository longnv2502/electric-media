import {Injectable} from "@angular/core";
import {SessionStorageService} from "ngx-webstorage";


@Injectable({
  providedIn: "root"
})
export class Principal {

    constructor(
        private $sessionStorage: SessionStorageService,
    ) {
    }


}
