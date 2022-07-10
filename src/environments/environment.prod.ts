import {ThemeType} from "./themes";

export const environment = {
  mail: "info@carefordesign.ch",
  production: true,
  themes:
    [
      {
        label: "Deep Purple & Amber",
        type: ThemeType.DeepPurpleAmber
      },
      {
        label: "Indigo & Pink",
        type: ThemeType.Default
      },
      {
        label: "Pink & Blue Grey",
        type: ThemeType.PinkBlueGrey
      },
      {
        label: "Purple & Green",
        type: ThemeType.PurpleGreen
      }
    ]
};
