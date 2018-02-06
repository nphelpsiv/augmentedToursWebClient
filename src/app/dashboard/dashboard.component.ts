import { Component, OnInit } from '@angular/core';
import { Tour } from '../tours/tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    //this.tourService.getTours().subscribe(tours => this.tours = tours.slice(1, 5));
    // const username = this.route.snapshot.paramMap.get('username');
    // console.log("USername: " + username);
    // this.tourService.getUserTours(username).subscribe(tours => {this.tours = tours.slice(1, 5);}, error => console.log(`Couldnt load tours`));
  }
}