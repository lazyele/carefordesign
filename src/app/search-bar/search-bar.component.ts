import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../dto/IPost";
import {BlogFilterPipe} from "../filter/blog-filter.pipe";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
 @Input() posts: IPost[] = [];
 filteredPosts: IPost[] = [];
 searchInput = ""
  constructor(private readonly blogFilterPipe:BlogFilterPipe) { }

  ngOnInit(): void {
   this.filteredPosts = this.posts;
  }

  onKeyUp() {
   this.filteredPosts = this.blogFilterPipe.transform(this.posts, this.searchInput);

  }
}
