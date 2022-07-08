import { Theme } from '@/theme';

export interface AppsState {
  activeApp: string;
  runningApps: [];
  pinnedApps: string[];
}

export interface DesktopState {
  brightness: string;
  bluetooth: boolean;
  openAppsOverview: boolean;
  wifi: boolean;
  theme: {
    name: Theme;
    mode: 'light' | 'dark';
  };
}
