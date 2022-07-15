import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {IPost} from "../../dto/IPost";
import {IMedia} from "../../dto/IMedia";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: IPost[] = [];
  images = new Map<number, IMedia>()
  isImageLoading = false;

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.loadImages(this.posts);
  }

  private loadImages(posts: IPost[]) {
    posts
      // todo on call
      .filter(p => p.featured_media !== 0)
      .filter(p => !this.images.has(p.featured_media))
      .forEach(p => this.blogService.getImage(p.featured_media)
        .subscribe(p => {
          if (this.images.has(p.id)) {
            return;
          }
          this.images.set(p.id, p);
        })
      );
  }
}
