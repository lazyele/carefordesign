import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getThemes(): Observable<IThemeOption[]>{
    return of(themes);
  }
  //setTheme()
}
export interface IThemeOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
}
export const themes:IThemeOption[]=
[
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ffc107",
    "headingColor": "#673ab7",
    "label": "Deep Purple & Amber",
    "value": "deeppurple-amber"
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ff4081",
    "headingColor": "#3f51b5",
    "label": "Indigo & Pink",
    "value": "indigo-pink"
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#e91e63",
    "label": "Pink & Blue Grey",
    "value": "pink-bluegrey"
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#4caf50",
    "headingColor": "#9c27b0",
    "label": "Purple & Green",
    "value": "purple-green"
  }
]
