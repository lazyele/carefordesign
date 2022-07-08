import {Component, OnInit} from '@angular/core';
import {FooterItems, MailItems} from "../../environments/footer-items";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerItems = FooterItems;
  mailItems = MailItems;

  constructor() {
  }

  ngOnInit(): void {
  }

}
