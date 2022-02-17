import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() cityName:string = "";

  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
