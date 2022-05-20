import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../dto/IPost";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private static readonly blogUrl = 'https://www.carefordesign.ch'
  private cache: IPost[] =[];

  constructor(private http: HttpClient) {
  }

  getPosts() : Observable<IPost[]>{
    if(this.cache.length !== 0){
      return of(this.cache);
    }

    const url = `${BlogService.blogUrl}/wp-json/wp/v2/posts`;
    return this.http.get<IPost[]>(url);
  }

  getPost(id: number): Observable<IPost> {
    const cachedPost = this.cache.filter(p => p.id == id);
    if(cachedPost.length === 1)
      return  of(cachedPost[0]);
    const url = `${BlogService.blogUrl}/wp-json/wp/v2/posts/${id}`;
    return this.http.get<IPost>(url);
  }
}

