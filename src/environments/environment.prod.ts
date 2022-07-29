import {ThemeType} from "./themes";

export const environment = {
  mail: "info@carefordesign.ch",
  production: true,
  themes:
    [
      {
        label: "Dunkler Hintergrund",
        type: ThemeType.DarkTheme,
        logoUrl: '../assets/images/logo_lighttheme.png'
      },
      {
        label: "Heller Hintergrund",
        type: ThemeType.Default,
        logoUrl: '../assets/images/logo_darktheme.png'
      },

    ]
};
