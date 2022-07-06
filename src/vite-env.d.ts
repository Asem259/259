/// <reference types="vite/client" />

import 'styled-components';

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    topBar: {
      background: string;
      border: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      full: string;
    };
    spacing: Record<Breakpoints, string>;
    colors: {
      primary: string;
      text: {
        active: string;
        muted: string;
      };
      common: {
        white: string;
        black: string;
      };
      background: {
        titleBar: string;
        light: string;
        dark: string;
      };
      border: { window: string; light: string; dark: string };
    };
    breakpoints: Record<Breakpoints, string>;
    styles: {};
  }
}
