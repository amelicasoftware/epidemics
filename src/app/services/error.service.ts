import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  showError(errorMessage: string){
    console.log(errorMessage);
    Swal.fire(
      'An error occurred!',
      errorMessage,
      'warning'
    );
  }
}
