import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cities.push("San Francisco");
    this.cities.push("London");
    this.cities.push("Gibraltar");
  }

}
