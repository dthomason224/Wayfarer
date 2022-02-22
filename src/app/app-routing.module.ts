import { PostComponent } from './home-page/post/post.component';
import { CityComponent } from './home-page/city/city.component';
import { CitiesComponent } from './home-page/cities/cities.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':id',
        component: CityComponent
      },
      {
        path: ':id/posts/:id',
        component: PostComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
