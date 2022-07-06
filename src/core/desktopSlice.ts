import { createSlice } from '@reduxjs/toolkit';

import { DesktopState } from '@/types/store/stateTypes';

const initialState: DesktopState = {
  brightness: '100',
  openAppsOverview: false,
  bluetooth: false,
  wifi: true,
  theme: {
    name: 'default',
    mode: 'dark',
  },
};

export const desktopSlice = createSlice({
  name: 'Desktop',
  initialState,
  reducers: {},
});

export const {} = desktopSlice.actions;
