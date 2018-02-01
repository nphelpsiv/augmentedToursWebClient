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
    this.getTourExhibits();
  }
  onSelect(exhibit: Exhibit): void {
    this.selectedExhibit = exhibit;
  }
  getTourExhibits(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.tourService.log(`Current exhibits = ${this.exhibits}` + `Before call tour = ${this.tour}`)
    
    this.tourService.getTour(id).subscribe(tour => {this.exhibits = tour.exhibits; this.tour = tour;}, error => console.log(`Couldnt load exhibits`));

    //this.tourService.log(`After call exhibits = ${this.exhibits}` + `After call tour = ${this.tour}`)
  }


  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.tourService.updateTour(this.tour)
      .subscribe(() => this.goBack());
  }

}
