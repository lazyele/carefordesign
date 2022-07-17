import {Component, Input, OnInit} from '@angular/core';
import {delay, expand, of, take} from "rxjs";

@Component({
  selector: 'app-post-counter',
  templateUrl: './post-counter.component.html',
  styleUrls: ['./post-counter.component.scss']
})
export class PostCounterComponent implements OnInit {
  private static delay = 200;
  @Input() title = '';
  @Input() count?: number;
  viewCount = 0;

  constructor() {
  }

  ngOnInit(): void {
    of(0)
      .pipe(expand(val => of(++val)
          .pipe(delay(PostCounterComponent.delay))),
        take((this.count ?? 0) + 1))
      .subscribe(val => this.viewCount = val);
  }
}
