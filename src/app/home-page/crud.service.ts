import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from "./post";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  city: any;

  constructor(private http: HttpClient) { }

  getCity(id: string) {
    return this.http
    .get(`/api/cities/${id}`)
  }

  addPost(post: Post, id: string): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(post)
    console.log(body);
    return this.http.post(`api/cities/${id}/posts`, body, {'headers': headers})

  }
}

