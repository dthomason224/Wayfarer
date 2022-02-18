import { CrudService } from './../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: any;
  post: any;

  constructor(private route: ActivatedRoute, private crudAPI: CrudService) { }

  getPostPage(id: string, index: string){
    return this.crudAPI.getPost(id, index)
    .subscribe(response => {
      console.log(response);
      this.city = response;
    });
  }

  getCityPage(id: string) {
    return this.crudAPI.getCity(id)
    .subscribe(response => {
      console.log(response);
      this.city = response;
    });

  }

  ngOnInit(): void {

  }
}
