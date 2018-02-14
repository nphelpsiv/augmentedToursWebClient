import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ToursComponent } from './tours/tours.component';
import { FormsModule } from '@angular/forms';
import { ExhibitComponent } from './exhibit/exhibit.component';

import { TourService } from './tour.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TourSearchComponent } from './tour-search/tour-search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ExhibitEditComponent } from './exhibit-edit/exhibit-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        ToursComponent,
        ExhibitComponent,
        DashboardComponent,
        TourSearchComponent,
        UserLoginComponent,
        ExhibitEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [TourService],
    bootstrap: [AppComponent]
})
export class AppModule { }
