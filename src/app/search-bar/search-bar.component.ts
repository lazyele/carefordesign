import {Component, Input, OnInit} from '@angular/core';
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
  constructor(private readonly blogFilterPipe:BlogFilterPipe, private readonly router:Router) {  }

  ngOnInit(): void {
   this.filteredPosts = this.posts;
  }

  onKeyUp() {
   this.filteredPosts = this.blogFilterPipe.transform(this.posts, this.searchInput);

  }

  onSubmit() {
   if(this.filteredPosts.length===1){
    this.router.navigate(["posts", this.filteredPosts[0].id])
   }
   else {

   }
  }
}
