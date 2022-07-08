import { defaultDarkTheme, defaultLightTheme } from './default';

export const themes = {
  default: {
    dark: defaultDarkTheme,
    light: defaultLightTheme,
  },
};

export type Theme = keyof typeof themes;
