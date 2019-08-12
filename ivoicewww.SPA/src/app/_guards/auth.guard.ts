import { AuthService } from "./../_services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ToastrServiceService } from "../_services/toastrService.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrServiceService
  ) {}
  canActivate(): boolean {
    if (this.authService.logedIn()) {
      return true;
    }
    this.toastr.showError('Nie masz uprawnień');
    this.router.navigate(['/home']);
    return false;
  }
}
