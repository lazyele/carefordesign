import {ThemeType} from "./themes";

export const environment = {
  mail: "info@carefordesign.ch",
  production: true,
  themes:
    [
      {
        label: "Dunkler Hintergrund",
        type: ThemeType.DarkTheme
      },
      {
        label: "Heller Hintergrund",
        type: ThemeType.Default
      },

    ]
};
