import { MaterialModule } from './naterial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule,  } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';
import { MregisterComponent } from './mregister/mregister.component';
import { HomeComponent } from './home/home.component';
import { TestivoiceComponent } from './testivoice/testivoice.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserslistComponent } from './userslist/userslist.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './userslist/edit-user/edit-user.component';
import { EditsamComponent } from './userslist/editsam/editsam.component';




export function tokenGetter(){
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    MregisterComponent,
    HomeComponent,
    TestivoiceComponent,
    UserslistComponent,
    ConfirmationDialogComponent,
    EditUserComponent,
    EditsamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule ,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
      }
    ),
  ],
  providers: [  AuthService, ToastrService, AuthGuard, ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [MregisterComponent, ConfirmationDialogComponent, EditUserComponent]
})
export class AppModule { }
