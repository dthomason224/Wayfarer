import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CityDataService } from 'src/app/city-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number = 0;

  cities: string[] = [];

  city: string = "";

  constructor(private service: CityDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cities = this.service.getInfo();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.city = this.cities[this.id-1];

    });
  }
}
