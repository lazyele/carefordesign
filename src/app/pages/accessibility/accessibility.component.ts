import {Component} from '@angular/core';
import {AccessibilityCardItems} from "../../../environments/accessibility-card-items";
import {AccessibilityVideoItems} from "../../../environments/accessibility-video";

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  accessibilityCardItems = AccessibilityCardItems;
  accessibilityVideoItems = AccessibilityVideoItems;


}
