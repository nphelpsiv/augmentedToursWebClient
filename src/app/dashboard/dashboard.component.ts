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
  }
}
