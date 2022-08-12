import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {StylesheetService} from "./stylesheet.service";
import {environment} from "../../../environments/environment";
import {ThemeType} from "../../../environments/themes";
import {LocalStorageService} from "./localstorage.service";


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static themeKey = 'theme';

  currentTheme$ = new BehaviorSubject<IThemeOption>(this.getTheme(ThemeType.Default))

  constructor(
    private readonly httpClient: HttpClient,
    private readonly styleSheet: StylesheetService,
    private readonly storageService: LocalStorageService
  ) {
  }

  private static createThemePath(theme: ThemeType) {
    const themesPath = '/assets/themes/';
    return `${themesPath}${theme}.css`
  }

  initialize() {
    const themeType = this.storageService.getItem<ThemeType>(ThemeService.themeKey)
    if (themeType && environment.themes.some(t => t.type === themeType)) {
      this.setTheme(themeType);
      return;
    }
    this.storageService.removeItem(ThemeService.themeKey)
  }

  getThemes(): Observable<IThemeOption[]> {
    return of(environment.themes);
  }

  setTheme(theme: ThemeType) {
    this.styleSheet.setStyle(
      ThemeService.themeKey,
      ThemeService.createThemePath(theme)
    );
    this.currentTheme$.next(this.getTheme(theme));
    this.storageService.setItem(ThemeService.themeKey, theme);
  }

  private getTheme(theme: ThemeType): IThemeOption {
    return environment.themes.filter(t => t.type == theme)[0];
  }
}

export interface IThemeOption {
  label: string;
  type: ThemeType;
  logoUrl: string;
}




