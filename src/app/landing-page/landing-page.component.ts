import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {
  images = [
    {title: "First", src: "./assets/images/London.jpg"},
    {title: "Second", src: "./assets/images/London2.jpg"},
    {title: "Third", src: "./assets/images/Gibraltar.jpg"},
    {title: "Fourth", src: "./assets/images/Gibraltar2.jpg"},
    {title: "Fifth", src: "./assets/images/San Francisco.jpg"},
    {title: "Sixth", src: "./assets/images/San Francisco2.jpg"}
  ]

  constructor(config : NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
}
