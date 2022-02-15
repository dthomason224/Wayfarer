import { CitiesComponent } from './cities/cities.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
  {
    path: 'cities',
    component: CitiesComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
