import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-counter',
  templateUrl: './post-counter.component.html',
  styleUrls: ['./post-counter.component.scss']
})
export class PostCounterComponent {
  @Input() title = '';
  @Input() count?: number;

  constructor() {
  }


}
