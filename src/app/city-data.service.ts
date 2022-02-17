import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  constructor() { }

  getInfo() {
    return ['San Francisco', 'London', 'Gibraltar'];
  }
}
