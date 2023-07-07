import {Injectable} from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertProvider {
    constructor(
    ) {
    }

    confirm(values: any) {
        const config = Object.assign({
            icon: 'warning',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText:  'No',
            confirmButtonClass: 'btn btn-yes',
            cancelButtonClass: 'btn btn-no',
            buttonsStyling: false,
            reverseButtons: true,
            width: 400
        }, values);
        return Swal.fire(config);
    }

    warning(params: any) {
        const config = Object.assign({
            icon: 'warning',
            showConfirmButton: true,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: 'OK',
            confirmButtonClass: 'btn btn-yes',
            buttonsStyling: false,
            reverseButtons: true,
            width: 400
        }, params);
        return Swal.fire(config);
    }
}
