// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ThemeType} from "./themes";

export const environment = {
  production: false,
  themes:
    [
      {
        backgroundColor: "#fff",
        buttonColor: "ffc107",
        headingColor: "#673ab7",
        label: "Deep Purple & Amber",
        type: ThemeType.DeepPurpleAmber
      },
      {
        backgroundColor: "#fff",
        buttonColor: "#ff4081",
        headingColor: "#3f51b5",
        label: "Indigo & Pink",
        type: ThemeType.Default
      },
      {
        backgroundColor: "#303030",
        buttonColor: "#607d8b",
        headingColor: "#e91e63",
        label: "Pink & Blue Grey",
        type: ThemeType.PinkBlueGrey
      },
      {
        backgroundColor: "#303030",
        buttonColor: "#4caf50",
        headingColor: "#9c27b0",
        label: "Purple & Green",
        type: ThemeType.PurpleGreen
      }
    ]
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
