import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'http://carefordesign.ch/'

  constructor(private http: HttpClient) { }

  getPosts(){
    const url = `${this.blogUrl}/wp-json/wo/vs2/posts`
    return this.http.get(url)
  }

  getSinglePosts(id: any){
    const url = `${this.blogUrl}/wp-json/wo/vs2/posts/${id}`
    return this.http.get(url)
  }

}
