import { element } from "protractor";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialogConfig,
  MatDialog
} from "@angular/material";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrServiceService } from "../_services/toastrService.service";
import { SelectionModel } from "@angular/cdk/collections";
import { ConfirmationDialogService } from "../confirmation-dialog/confirmation-dialog.service";

import { EditUserComponent } from "./edit-user/edit-user.component";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.component.html",
  styleUrls: ["./userslist.component.css"]
})
export class UserslistComponent implements OnInit {
  displayedColumns: string[] = [
    "delete",
    "edit",
    "id",
    "username",
    "companyPhone",
    "companyName",
    "companyCity",
    "active",
    "callCount",
    "companyStreetNumber",
    "companyCountry"
  ];
  public dataSource = new MatTableDataSource<User>();
  private YN: boolean;
  selection = new SelectionModel<User>(true, []);
  public dataLength: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  users: User[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrServiceService,
    private confirmationDialogService: ConfirmationDialogService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.dataSource.data = this.users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        this.toastr.showError(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  kasujUsera(user: User) {
    console.log(user.id);
    if (user.id === 31){
      return this.toastr.showError("Not allowed edit or delete admin ");
    }
    this.confirmationDialogService
      .confirm("Please confirm..", "Do you really want to ... ?")
      .then(confirmed => {
        if (confirmed) {
          this.userService.DeleteUser(user.id).subscribe(users => {
            this.users = this.users.filter(u => u !== user);
          });
        }
      });
  }

  editUsera(user: User) {
    const id = user.id;
    const username = user.username;
    const companyPhone = user.companyPhone;
    const companyName = user.companyName;
    const companyCity = user.companyCity;
    const active = user.active;
    const callCount = user.callCount;
    const companyStreetNumber = user.companyStreetNumber;
    const companyCountry = user.companyCountry;
    const mail = user.mail;
    const passwordHash = user.passwordHash;
    const passwordSalt = user.passwordSalt;

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
        this.loadUsers();
      });
  }
}
