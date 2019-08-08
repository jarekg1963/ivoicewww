import { Component, OnInit } from '@angular/core';
import { ToastrServiceService } from '../_services/toastrService.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private toastr: ToastrServiceService, private authService: AuthService) { }


  ngOnInit() {
  }


  register() {
    this.authService.registeracja(this.model).subscribe(() => {
      this.toastr.showSuccess('Zapisano OK');
    }, error => {
      this.toastr.showError('Blad rejestracji ');
    });
  }

  cancel() {
    console.log('Anulowane');
//    this.cancelRegister.emit(false);
  }

}
