import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-headliner',
  templateUrl: './headliner.component.html',
  styleUrls: ['./headliner.component.scss']
})
export class HeadlinerComponent {
  @Input() text = '';
}
