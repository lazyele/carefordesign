import {Component, OnInit} from '@angular/core';
import {IThemeOption, ThemeService} from "../services/theme.service";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  themes: IThemeOption[] = [];

  constructor(private readonly themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.getThemes()
      .subscribe({next: themes => this.themes = themes});
  }

  changeTheme(theme: IThemeOption) {
    this.themeService.setTheme(theme.value)

  }
}
