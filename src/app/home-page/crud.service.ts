import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  getPost(id: string, index: string) {
    return this.http
    .get(`/api/cities/${id}/posts/${index}`)
  }
}
