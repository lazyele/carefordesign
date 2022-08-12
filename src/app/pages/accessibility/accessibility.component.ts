import {Component} from '@angular/core';
import {AccessibilityItems} from "../../../environments/accessibility-items";


@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  accessibilityCardItems = AccessibilityItems.AccessibilityCardItems;
  accessibilityVideoItems = AccessibilityItems.AccessibilityVideoItems;
}
