import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../tours/tour';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TourService }  from '../tour.service';
import { Exhibit } from '../exhibit/exhibit'


@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {
  @Input() tour: Tour;
  exhibits: Exhibit[]
  
  constructor(
    private tourService: TourService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  selectedExhibit: Exhibit;

  ngOnInit(): void {
    this.getExhibits();
  }
  getExhibits(): void {
    this.tourService.getExhibits().subscribe(exhibits => this.exhibits = exhibits);
  }

  // getExhibits(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.tourService.getExhibit(id).subscribe(tour => this.tour = tour);
  // }

  goBack(): void {
    this.location.back();
  }
  // save(): void {
  //   this.tourService.updateTour(this.tour)
  //     .subscribe(() => this.goBack());
  // }

}
