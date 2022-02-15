import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {
  images = [
    {title: "First", src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {title: "Second", src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}
  ]

  constructor(config : NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
}
