import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../dto/IPost";
import {BlogFilterPipe} from "../filter/blog-filter.pipe";
import {Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() posts: IPost[] = [];
  inputControl!: FormControl;
  filteredPosts$!: Observable<IPost[]>;

  constructor(private readonly blogFilterPipe: BlogFilterPipe,
              private readonly router: Router,
              private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.inputControl = this.fb.control('');
    this.filteredPosts$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(this.filterInput()));

  }

  private filterInput() {
    return (value: number | string) => {
      if (typeof value === "number") {
        return this.posts;
      }
      return this.blogFilterPipe.transform(this.posts, <string>value);
    };
  }

  onItemClick(id: number) {
    this.router.navigate(["posts", id])
  }

  onNavigateToList() {
    const value = this.inputControl.value?.trim();
    this.router.navigate(["posts"], {queryParams: {search: value}});
  }

}
