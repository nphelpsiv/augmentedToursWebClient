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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tourService.addTour({ name } as Tour)
      .subscribe(tour => {
        this.tours.push(tour);
      });
  }

}
