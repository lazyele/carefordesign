import {Component, OnInit} from '@angular/core';
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
  id!: number;

  constructor(
    private readonly blogService: BlogService,
    private readonly route: ActivatedRoute
  ) {
  }


  ngOnInit() {
    this.id = <number>(this.route.snapshot.paramMap.get('id') as unknown);
    this.getPosts()
  }

  getPosts() {
    this.blogService.getPost(this.id)
      .subscribe(
        {
          next: data => this.post = data,
          error: error => console.log(error)
        });
  }
}
