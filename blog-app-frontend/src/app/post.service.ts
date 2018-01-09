import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post';
@Injectable()
export class PostService {


  constructor(
    private http: HttpClient,
  ) { }

  private postsUrl = 'http://127.0.0.1:8000/posts/';


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + id + '/')
  }


}
