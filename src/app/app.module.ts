import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToursComponent } from './tours/tours.component';
import { FormsModule } from '@angular/forms';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './message.service';
import { TourService } from './tour.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TourSearchComponent } from './tour-search/tour-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToursComponent,
    ExhibitComponent,
    MessagesComponent,
    DashboardComponent,
    TourSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ TourService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
