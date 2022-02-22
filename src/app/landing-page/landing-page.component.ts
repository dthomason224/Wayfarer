import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {
  images = [
    {src: "./assets/images/London.jpg"},
    {src: "./assets/images/London2.jpg"},
    {src: "./assets/images/Gibraltar.jpg"},
    {src: "./assets/images/Gibraltar2.jpg"},
    {src: "./assets/images/San Francisco.jpg"},
    {src: "./assets/images/San Francisco2.jpg"}
  ]

  constructor(config : NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
}
