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
    private readonly blogService: BlogService,
    private readonly route: ActivatedRoute
  ) { }


  ngOnInit() {
    //this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getPost()
  }
  getPost() {
    this.blogService.getPost()
      .subscribe(
        {
          next: data => this.post = data,
          error: error => console.log(error)
        });
  }}
