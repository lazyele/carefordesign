import {Component} from '@angular/core';
import {AccessibilityCardItems} from "../../../environments/accessibility-card-items";

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  accessibilityCardItems = AccessibilityCardItems;


}
