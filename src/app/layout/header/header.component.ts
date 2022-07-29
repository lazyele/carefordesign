import {Component, OnInit} from '@angular/core';
import {NavbarItems} from "../../../environments/navbar-items";
import {ThemeService} from "../../services/theme/theme.service";
import {map, Observable} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarItems = NavbarItems;

  currentLogoUrl$!: Observable<string>;


  constructor(private readonly themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.currentLogoUrl$ = this.themeService.currentTheme$
      .pipe(map(currentTheme => currentTheme.logoUrl))

  }
}





