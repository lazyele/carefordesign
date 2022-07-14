import {Component, OnInit} from '@angular/core';
import {IPost} from "../../dto/IPost";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogPosts: IPost[] = [];

  constructor(
    private blogService: BlogService
  ) {
    let btn = document.getElementById("searchbutton");
    btn!.addEventListener("click", (e: Event) => this.getPosts());
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.blogService.getPosts()
      .subscribe(
        {
          next: data => this.blogPosts = data,
          error: error => console.log(error)
        });
  }
}
