import {Component, OnInit} from '@angular/core';
import {ITag} from "../../dto/ITag";
import {BlogService} from "../../services/blog.service";
import {Observable, Subscription} from "rxjs";
import {IPost} from "../../dto/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tags$!: Observable<ITag[]>;
  posts$!: Observable<IPost[]>;
  searchInputSubscription!: Subscription;
  searchInput = "";
  searTagIds: number[] = [];

  constructor(private readonly blogService: BlogService,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getQueryParameter();
    this.tags$ = this.blogService.getTags();
    this.posts$ = this.blogService.getPosts();
  }

  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }

  private getQueryParameter() {
    this.searchInputSubscription = this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchInput = params.get("search") ?? "";
      this.searTagIds = (params.get("tags") ?? "").split(';')
        .filter(str => str)
        .map(str => parseInt(str));
    })
  }

}
