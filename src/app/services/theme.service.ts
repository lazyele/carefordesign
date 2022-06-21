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
    // hier schauen
    this.styleSheet.setStyle(
      "theme",
      `/assets/themes/${theme}.css`
    );
    this.currentTheme$.next(this.getTheme(theme));
  }

  private getTheme(theme: ThemeType): IThemeOption {
    const currentTheme = environment.themes.filter(t => t.type == theme)[0];
    console.log(currentTheme);
    return currentTheme;
  }
}

export interface IThemeOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  type: ThemeType;
}




