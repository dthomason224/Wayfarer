import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    CitiesComponent,
    CityComponent,
    PostComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [
    CitiesComponent,
    CityComponent,
    PostComponent,
    HttpClientModule
  ]
})
export class HomePageModule { }
