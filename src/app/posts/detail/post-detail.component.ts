import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  singlePosts: any;
  id!: string

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }


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
        console.log(error);
      });
  }}
