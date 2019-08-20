import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestivoiceComponent } from './testivoice/testivoice.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserslistComponent } from './userslist/userslist.component';
import { EditsamComponent } from './userslist/editsam/editsam.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'testivoice', component: TestivoiceComponent,  canActivate: [AuthGuard]},
  { path: 'usersam', component: EditsamComponent,  canActivate: [AuthGuard]},
  { path: 'userlist', component: UserslistComponent,  canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
