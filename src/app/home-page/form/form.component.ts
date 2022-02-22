import { Post } from './../post';
import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  post = new Post();

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getCity
  }

  // addPost() {
  //   this.crudService.addPost(this.post)
  //   .subscribe(response => {
  //     console.log(response);

  //   })
  // }

}
