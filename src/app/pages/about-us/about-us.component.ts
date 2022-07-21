import {Component} from '@angular/core';
import {AboutUsItems} from "../../../environments/about-us-items";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  aboutUsItems = AboutUsItems;

  emailSupport() {
    location.href = "mailto:info@carefordesign.ch"
  }


  constructor() {
  }


}
