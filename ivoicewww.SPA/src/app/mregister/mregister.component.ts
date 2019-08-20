import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../_models/user";
import { AuthService } from '../_services/auth.service';
import { ToastrServiceService } from '../_services/toastrService.service';


@Component({
  selector: "app-mregister",
  templateUrl: "./mregister.component.html",
  styleUrls: ["./mregister.component.css"]
})
export class MregisterComponent implements OnInit {


  data: any = {};



  constructor(
    public dialogRef: MatDialogRef<MregisterComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User ,  private authService: AuthService ,
    private toastr: ToastrServiceService
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {

      this.user.active = '0';


      this.authService.registeracja(this.user).subscribe(() => {
        this.toastr.showSuccess('Zapisano OK');
      }, error => {
        this.toastr.showError('Blad rejestracji ');
      });

      this.dialogRef.close();

  }

  onSubmit() {
    alert(JSON.stringify(this.data));


  }

}
