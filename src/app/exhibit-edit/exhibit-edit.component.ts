import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../tours/tour';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TourService }  from '../tour.service';
import { Exhibit } from '../exhibit/exhibit'

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html',
  styleUrls: ['./exhibit-edit.component.css']
})
export class ExhibitEditComponent implements OnInit {
  @Input() exhibit: Exhibit;

  constructor(private tourService: TourService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    //this.getExhibits();
  }

  // getExhibits(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.tourService.getExhibit(id).subscribe(exhibit => this.exhibit = exhibit);

}
