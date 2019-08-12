import { User } from "./../_models/user";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../_services/auth.service";
import { ToastrServiceService } from "../_services/toastrService.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MregisterComponent } from "../mregister/mregister.component";
import { max } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private toastr: ToastrServiceService,
    private router: Router
  ) {}

  MenuLoginWidoczne = false;
  przyciskiWidoczne = true;

  password: string;

  user: User;

  ngOnInit() {}

  login() {
    console.log("model pass  " + this.model.password);
    this.authService.login(this.model).subscribe(
      next => {
        this.toastr.showSuccess("Zalogowano pomyślnie ");
        this.MenuLoginWidoczne = true;
        this.przyciskiWidoczne = false;
      },
      error => {
        this.toastr.showError("Błąd logowania ");
      }
    );
  }

  loggedIn() {
    this.przyciskiWidoczne = true;
    return this.authService.logedIn();

  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
    this.MenuLoginWidoczne = false;
    this.toastr.showSuccess("Wylogowano ");
  }

  PokazLogowanie() {
    this.MenuLoginWidoczne = true;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '850px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(MregisterComponent, dialogConfig);


  }
}
