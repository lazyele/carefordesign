import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://www.carefordesign.ch'

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const url = `${BlogService.blogUrl}/wp-json/wp/v2/posts`;
    return this.http.get<IPost[]>(url);
  }

  getPost(id: number) {
    const url = `${BlogService.blogUrl}/wp-json/wp/v2/posts/${id}`;
    return this.http.get<IPost>(url);
  }
}

