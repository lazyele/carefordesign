import {Component} from '@angular/core';
import {NavbarItems} from "../../../environments/navbar-items";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarItems = NavbarItems

  constructor() {

  }
}






