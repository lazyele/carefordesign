import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../dto/IPost";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogPosts: IPost[] = [];
  searchInput = "";
  constructor(
    private blogService: BlogService, private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    //this.searchInput = this.activatedRoute.snapshot.queryParamMap.get("search")??"";
    this.activatedRoute.queryParamMap.subscribe(params=>{
      this.searchInput=params.get("search")??"";
    })
    this.getPosts()
  }
  getPosts() {
    this.blogService.getPosts()
      .subscribe(
      {
        next: data => this.blogPosts = data,
        error: error => console.log(error)
      });
  }
}
