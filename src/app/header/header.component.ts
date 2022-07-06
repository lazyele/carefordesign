import {Component, OnInit} from '@angular/core';
import {NavbarItems} from "../../environments/navbar-items";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarItems = NavbarItems

  constructor() {

  }


  ngOnInit(): void {
  }
}
