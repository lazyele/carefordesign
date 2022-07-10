import {Component, OnInit} from '@angular/core';
import {FooterItems} from "../../environments/footer-items";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerItems = FooterItems;
  mail = environment.mail;

  constructor() {
  }

  ngOnInit(): void {
  }

}
