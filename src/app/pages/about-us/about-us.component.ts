import {Component} from '@angular/core';
import {AboutUsItems} from "../../../environments/about-us-items";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  aboutUsItems = AboutUsItems;
  mail = environment.mail;

}
