import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {IPost} from "../dto/IPost";
import {BlogFilterPipe} from "../filter/blog-filter.pipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() posts: IPost[] = [];
  filteredPosts: IPost[] = [];
  searchInput = ""
  hasNoItems = false;

  constructor(private readonly blogFilterPipe: BlogFilterPipe, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.filteredPosts = this.posts;

  }

  onKeyUp() {
    this.filteredPosts = this.blogFilterPipe.transform(this.posts, this.searchInput);
    this.hasNoItems = this.filteredPosts.length===0;

  }

  onSubmit() {
    if (this.filteredPosts.length === 1) {
      this.router.navigate(["posts", this.filteredPosts[0].id])
    } else {
      this.router.navigate(["posts"],{
        queryParams:{
          search: this.searchInput.trim()
        }
      })

    }
  }

}
