import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../services/blog.service";
import {IPost} from "../../dto/IPost";

@Component({
  selector: 'app-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!: IPost;
  id: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getPost()
  }
  getPost() {
    this.blogService.getPost(this.id).subscribe(
      data => {
        this.post = data;
      },
      (error) => {
        console.log(error);
      });
  }}
