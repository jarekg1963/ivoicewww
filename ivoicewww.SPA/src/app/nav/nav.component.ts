import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { ToastrServiceService } from '../_services/toastrService.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private toastr: ToastrServiceService)  { }

  ngOnInit() {
  }

  login() {

    console.log('model pass  ' + this.model.password);
    this.authService.login(this.model).subscribe(
      next => {
        this.toastr.showSuccess('Zalogowano pomyślnie ');
      },
      error => {
        this.toastr.showError('Błąd logowania ');
      }
    );
  }

  loggedIn() {
    return this.authService.logedIn();
  }

  logout() {
    localStorage.removeItem('token');
  //  this.router.navigate(['/home']);
    this.toastr.showSuccess('Wylogowano ');
  }


}
