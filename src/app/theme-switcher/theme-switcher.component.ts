import {Component, OnDestroy, OnInit} from '@angular/core';
import {IThemeOption, ThemeService} from "../services/theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  themes: IThemeOption[] = [];
  currentTheme: IThemeOption | null = null;
  private currentThemeSub!: Subscription;

  constructor(private readonly themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.getThemes()
      .subscribe({next: themes => this.themes = themes});
    this.currentThemeSub = this.themeService.currentTheme$
      .subscribe({next: currentTheme => this.currentTheme = this.themes.find(t => t.type == currentTheme) ?? null});
  }

  changeTheme(theme: IThemeOption) {
    this.themeService.setTheme(theme.type)

  }

  ngOnDestroy(): void {
    this.currentThemeSub.unsubscribe()
  }
}
