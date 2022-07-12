import {Component, OnInit} from '@angular/core';
import {ITag} from "../../dto/ITag";
import {BlogService} from "../../services/blog.service";
import {Observable} from "rxjs";
import {IPost} from "../../dto/IPost";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tags$!: Observable<ITag[]>;
  posts$!: Observable<IPost[]>;

  constructor(private readonly blogService: BlogService) {
  }

  ngOnInit(): void {
    this.tags$ = this.blogService.getTags();
    this.posts$ = this.blogService.getPosts();
  }

}
