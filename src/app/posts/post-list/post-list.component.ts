import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from "../../services/wordpress/blog.service";
import {IPost} from "../../dto/posts/IPost";
import {IMedia} from "../../dto/posts/IMedia";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: IPost[] = [];
  isImageLoading = false;
  private images = new Map<number, IMedia>()

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.loadImages(this.posts);
  }

  hasImage(post: IPost) {
    return this.images.has(post.featured_media);
  }

  getImageSource(post: IPost) {
    return this.images?.get(post.featured_media)
      ?.media_details?.sizes?.large?.source_url ?? ''
  }

  getImageAlt(post: IPost) {
    return this.images?.get(post.featured_media)?.alt_text ?? ''
  }

  private loadImages(posts: IPost[]) {
    posts
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
