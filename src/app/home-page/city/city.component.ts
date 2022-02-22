import { CrudService } from './../crud.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city: any;

  constructor(private crudAPI: CrudService, private route: ActivatedRoute) {

  }

  getCityPage(id: string) {
    return this.crudAPI.getCity(id)
    .subscribe(response => {
      console.log(response);
      this.city = response;
    });

  }

  ngOnInit(): void {
    this.city = this.route.params.subscribe(params => {
      this.getCityPage(params['id']);
    })
  }
}
