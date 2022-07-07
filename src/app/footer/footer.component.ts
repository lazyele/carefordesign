import {Component, OnInit} from '@angular/core';
import {FooterItems} from "../../environments/footer-items";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerItems = FooterItems

  constructor() {
  }

  ngOnInit(): void {
  }

}
