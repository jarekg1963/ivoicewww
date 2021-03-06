import { User } from "./../_models/user";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../_services/auth.service";
import { ToastrServiceService } from "../_services/toastrService.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MregisterComponent } from "../mregister/mregister.component";
import { Router } from "@angular/router";
import { UserService } from '../_services/user.service';
import { EditUserComponent } from '../userslist/edit-user/edit-user.component';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  MenuLoginWidoczne = false;
  przyciskiWidoczne = true;


  constructor(
    public dialog: MatDialog,
    public userservice: UserService,
    private authService: AuthService,
    private toastr: ToastrServiceService,
    private router: Router
  ) {}


  //data: any;

  password: string;
  userLoged: any;
  user: any;


  ngOnInit() {
  }

  login() {
    console.log("model pass  " + this.model.password);
    this.authService.login(this.model).subscribe(
      res => {
        this.toastr.showSuccess("Zalogowano pomyślnie ");
        this.MenuLoginWidoczne = true;
        this.przyciskiWidoczne = false;
        this.userLoged = res;
        this.userservice.getUser(this.userLoged.nameid).subscribe(res1 =>{
         this.user = res1;
       });

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
    this.router.navigate(["/home"]);
    this.MenuLoginWidoczne = false;
    this.toastr.showSuccess("Wylogowano ");
  }

  PokazLogowanie() {
    this.MenuLoginWidoczne = true;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "850px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(MregisterComponent, dialogConfig);
  }

  OpenEditUsera() {
    console.log(this.user);
    const id = this.user.id;
    const username = this.user.username;
    const companyPhone = this.user.companyPhone;
    const companyName = this.user.companyName;
    const companyCity = this.user.companyCity;
    const active = this.user.active;
    const callCount = this.user.callCount;
    const companyStreetNumber = this.user.companyStreetNumber;
    const companyCountry = this.user.companyCountry;
    const mail = this.user.mail;
    const passwordHash = this.user.passwordHash;
    const passwordSalt = this.user.passwordSalt;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "75%";
    dialogConfig.data = {
      id,
      username,
      companyPhone,
      mail,
      companyName,
      companyCity,
      companyStreetNumber,
      companyCountry,
      active,
      callCount,
      passwordHash,
      passwordSalt
    };

    this.dialog
      .open(EditUserComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {

      });
  }
  }

