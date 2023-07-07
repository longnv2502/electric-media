import {Injectable} from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetToastProvider {
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor() {
  }

  success(title: string) {
    return this.Toast.fire({
      icon: 'success',
      title: title
    });
  }

  error(title: string) {
    return this.Toast.fire({
      icon: 'error',
      title: title
    });
  }

  warning(title: string) {
    return this.Toast.fire({
      icon: 'warning',
      title: title
    });
  }

  info(title: string) {
    return this.Toast.fire({
      icon: 'info',
      title: title
    });
  }

  question(title: string) {
    return this.Toast.fire({
      icon: 'question',
      title: title
    });
  }



}
