import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogPosts: any
  errorMessage: any

  constructor(private blogService: BlogService) { }

  ngOnInit(){
    this.getPosts()
  }
  getPosts() {
    this.blogService.getPosts().subscribe(
      data => {
        this.blogPosts = data;
      },
      (error) => {
        this.errorMessage = error.message
        console.log(error);
      });
  }
}
