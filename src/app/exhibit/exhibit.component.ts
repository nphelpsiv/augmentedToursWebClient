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
    //this.tourService.log(`Before call tour = ${this.route.snapshot.paramMap.get('tourID')}`)    
    const tourID = this.route.snapshot.paramMap.get('tourID');
    //this.exhibits = this.tourService.getExhibits(_id);
    
    //this.exhibits = this.tour.exhibits
    this.tourService.getTour(tourID).subscribe(tour => {this.exhibits = tour.exhibits; this.tour = tour; console.log(tour.exhibits)}, error => console.log(`Couldnt load exhibits`));

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
