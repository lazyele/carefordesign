import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../../dto/posts/IPost";
import {IMedia} from "../../dto/posts/IMedia";
import {ITag} from "../../dto/posts/ITag";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private static readonly blogUrl = 'https://api.carefordesign.ch/wp-json/wp/v2'

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const url = `${BlogService.blogUrl}/posts`;
    return this.http.get<IPost[]>(url);
  }

  getPost(id: number) {
    const url = `${BlogService.blogUrl}/posts/${id}?per_page=100`;
    return this.http.get<IPost>(url);
  }

  getImage(id: number) {
    const url = `${BlogService.blogUrl}/media/${id}`
    return this.http.get<IMedia>(url);
  }

  getTags() {
    const url = `${BlogService.blogUrl}/tags?per_page=100`;
    return this.http.get<ITag[]>(url);
  }

}

