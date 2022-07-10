import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
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
  filteredPosts: IPost[] = [];
  searchInput = ""
  hasNoItems = false;
  inputControl!: FormControl;
  items! : Observable<IPost[]>;

  constructor(private readonly blogFilterPipe: BlogFilterPipe,
              private readonly router: Router,
              private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.filteredPosts = this.posts;
    this.inputControl = this.fb.control('');
    this.items =  this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.blogFilterPipe.transform(this.posts, value?.trim()))
    )

  }

  onKeyUp() {
    this.filteredPosts = this.blogFilterPipe.transform(this.posts, this.searchInput);
    this.hasNoItems = this.filteredPosts.length === 0;

  }

  onSubmit() {
    if (this.filteredPosts.length === 1) {
      this.router.navigate(["posts", this.filteredPosts[0].id])
    } else {
      this.router.navigate(["posts"], {
        queryParams: {
          search: this.searchInput.trim()
        }
      })

    }
  }

}
