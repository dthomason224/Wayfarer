import { CrudService } from './../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  city: any;
  postId: any;

  constructor(private route: ActivatedRoute, private crudAPI: CrudService) { }

  getCityPage(id: string) {
    return this.crudAPI.getCity(id)
    .subscribe(response => {
      console.log(response);
      this.city = response;
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = this.getCityPage(params['id']);
      this.postId = (params['postId']);
    })

  }
}
