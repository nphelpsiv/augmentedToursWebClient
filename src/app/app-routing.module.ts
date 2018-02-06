import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursComponent } from './tours/tours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'tours', component: ToursComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/user-login', pathMatch: 'full'},
  {path: 'detail/:tourID', component: ExhibitComponent },
  {path: 'user-login', component: UserLoginComponent},
  {path: 'tours/:username', component: ToursComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
}) 
export class AppRoutingModule { }
