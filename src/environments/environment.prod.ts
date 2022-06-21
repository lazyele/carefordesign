import {ThemeType} from "./themes";

export const environment = {
  production: true,
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
