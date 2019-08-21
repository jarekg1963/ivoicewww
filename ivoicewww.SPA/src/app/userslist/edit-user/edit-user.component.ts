import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import { UserslistComponent } from "../userslist.component";
import { CollapseModule } from "ngx-bootstrap";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUserComponent>,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createFormEd();
  }

  createFormEd() {
    this.formGroup = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      username: [this.data.username, Validators.required],
      companyPhone: [this.data.companyPhone, Validators.required],
      mail: [this.data.mail, Validators.required],
      companyName: [this.data.companyName],
      companyCity: [this.data.companyCity],
      companyStreetNumber: [this.data.companyStreetNumber],
      companyCountry: [this.data.companyCountry],
      active: [this.data.active],
      callCount: [this.data.callCount],
      passwordHash: [this.data.passwordHash],
      passwordSalt: [this.data.passwordSalt]
    });

  }

  closeMe(): void {
    this.dialogRef.close();
  }



  Save() {
    this.userService.UpdateUser(this.data.id, this.data).subscribe(res => {
    });

    this.dialogRef.close();
  }
}
