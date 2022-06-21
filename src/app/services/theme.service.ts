import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {StylesheetService} from "./stylesheet.service";
import {environment} from "../../environments/environment";
import {ThemeType} from "../../environments/themes";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme$: BehaviorSubject<ThemeType> = new BehaviorSubject<ThemeType>(ThemeType.Default)

  constructor(
    private readonly httpClient: HttpClient,
    private readonly styleSheet: StylesheetService
  ) {
  }

  getThemes(): Observable<IThemeOption[]> {
    return of(environment.themes);
  }

  setTheme(theme: ThemeType) {
    this.styleSheet.setStyle(
      "theme",
      `/assets/themes/${theme}.css`
    );
    this.currentTheme$.next(theme);
  }
}

export interface IThemeOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  type: ThemeType;
}




