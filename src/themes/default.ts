import { css, DefaultTheme } from 'styled-components';

const topBar = {
  background: '#191919',
  border: 'none',
};

const styles = {};

const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  full: '999rem',
};
const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};
const breakpoints = {
  xs: '320px',
  sm: '425p',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
};

export const defaultDarkTheme: DefaultTheme = {
  topBar,
  borderRadius,
  breakpoints,
  spacing,
  styles,
  colors: {
    common: {
      white: 'white',
      black: ' #1d1d21',
    },
    primary: '#1b6acb',
    background: {
      titleBar: '#282828',
      light: '#353535',
      dark: '#2d2d2d',
    },
    text: {
      active: '#fcfcfc',
      muted: '#7c7c7b',
    },
    border: {
      window: '',
      light: '',
      dark: '',
    },
  },
};

export const defaultLightTheme: DefaultTheme = {
  topBar,
  borderRadius,
  breakpoints,
  spacing,
  styles,
  colors: {
    common: {
      white: 'white',
      black: ' #1d1d21',
    },
    primary: '#1b6acb',
    background: {
      titleBar: '#dad6d2',
      light: '#fcfcfc',
      dark: '#f6f5f4',
    },
    text: {
      active: '#2e3436',
      muted: '#929595',
    },
    border: {
      window: '',
      light: '',
      dark: '',
    },
  },
};
