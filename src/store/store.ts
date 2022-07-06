import { configureStore } from '@reduxjs/toolkit';

import { appsSlice } from '@/core/appsSlice';
import { desktopSlice } from '@/core/desktopSlice';

export const store = configureStore({
  reducer: {
    apps: appsSlice.reducer,
    desktop: desktopSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
