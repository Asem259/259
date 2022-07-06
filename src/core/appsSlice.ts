import { createSlice } from '@reduxjs/toolkit';

import { AppsState } from '@/types/store/stateTypes';

const initialState: AppsState = {
  activeApp: '',
  runningApps: [],
  pinnedApps: [],
};

export const appsSlice = createSlice({
  name: 'Apps',
  initialState,
  reducers: {},
});

export const {} = appsSlice.actions;
