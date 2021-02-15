import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  showError(errorMessage: string): void {
    console.log(errorMessage);
    Swal.fire(
      'A ocurrido un error!',
      errorMessage,
      'warning'
    );
  }
}
