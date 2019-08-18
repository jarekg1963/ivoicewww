import { element } from "protractor";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrServiceService } from "../_services/toastrService.service";
import { SelectionModel } from "@angular/cdk/collections";
import { ConfirmationDialogService } from "../confirmation-dialog/confirmation-dialog.service";
import { CompileShallowModuleMetadata } from "@angular/compiler";

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
    private confirmationDialogService: ConfirmationDialogService
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

  kasujTask(user: User) {
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
}
