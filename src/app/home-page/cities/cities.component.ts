import { Component, OnInit } from '@angular/core';
import { CityDataService } from 'src/app/city-data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: string[] = [];

  constructor(private service: CityDataService) { }

  ngOnInit(): void {
    // this.cities.push("San Francisco");
    // this.cities.push("London");
    // this.cities.push("Gibraltar");
    this.cities = this.service.getInfo();
  }

}
