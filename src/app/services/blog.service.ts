import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../dto/IPost";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private static readonly blogUrl = 'https://www.carefordesign.ch'

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

