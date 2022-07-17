import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-counter',
  templateUrl: './post-counter.component.html',
  styleUrls: ['./post-counter.component.scss']
})
export class PostCounterComponent implements OnInit {
  @Input() title = '';
  @Input() count?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
