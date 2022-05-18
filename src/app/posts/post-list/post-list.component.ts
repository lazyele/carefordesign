import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  singlePosts: any;
  errorMessage: any;
  id!: string

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePosts()
  }

  getSinglePosts() {
    this.blogService.getSinglePosts(this.id).subscribe(
      data => {
        this.singlePosts = data;
      },
      (error) => {
        this.errorMessage = error.message
        console.log(error);
      });
  }
}
