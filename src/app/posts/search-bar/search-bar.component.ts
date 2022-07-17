import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../dto/posts/IPost";
import {ContentFilterPipe} from "../filters/content-filter.pipe";
import {Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {filter, map, Observable, startWith, tap} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() search?: string;
  @Input() posts: IPost[] = [];
  @Output() onSearchChanged = new EventEmitter<string>();
  inputControl!: FormControl;
  filteredPosts$!: Observable<IPost[]>;

  constructor(private readonly blogFilterPipe: ContentFilterPipe,
              private readonly router: Router,
              private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeControl();
    this.initializeFilter();

  }

  private initializeFilter() {
    this.filteredPosts$ = this.inputControl.valueChanges.pipe(
      startWith(this.search ?? ''),
      filter(value => SearchBarComponent.isString(value)),
      tap(input => this.onSearchChanged.emit(input)),
      map(input => this.filterInput(input)),
    );
  }

  private initializeControl() {
    this.inputControl = this.fb.control(this.search ?? '');
  }

  private filterInput(value: string) {
    return this.blogFilterPipe.transform(this.posts, <string>value);
  }

  private static isString(value: number | string) {
    return typeof value === 'string';
  }

  onItemClick(id: number) {
    this.router.navigate(["posts", id])
  }

  hasMinInputLength() {
    return this.inputControl.value?.length > 1
  }

}
