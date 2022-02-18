import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {
  images = [
    {title: "Tower Bridge, London", src: "./assets/images/London.jpg"},
    {title: "River Thames, London", src: "./assets/images/London2.jpg"},
    {title: "Gibraltar Bay", src: "./assets/images/Gibraltar.jpg"},
    {title: "Rock of Gibraltar", src: "./assets/images/Gibraltar2.jpg"},
    {title: "Golden Gate Bridge, San Francisco", src: "./assets/images/San Francisco.jpg"},
    {title: "Francisco’s historic rail lines", src: "./assets/images/San Francisco2.jpg"}
  ]

  constructor(config : NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
}
