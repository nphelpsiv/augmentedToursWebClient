import { Component, OnInit } from '@angular/core';
import { Tour } from './tour';

import { TourService } from '../tour.service';




@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: Tour[]

  constructor(private tourService: TourService) { }

  selectedTour: Tour;
  
  // onSelect(tour: Tour): void {
  //   this.selectedHero = tour;
  // }
  getTours(): void {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }
  ngOnInit() {
    this.getTours()
  }
  onSelect(tour: Tour): void {
    this.selectedTour = tour;
  }
  add(tourName: string): void {
    tourName = tourName.trim();
    if (!tourName) { return; }
    this.tourService.addTour({ tourName } as Tour)
      .subscribe(tour => {
        this.tours.push(tour);
      });
  }

}
