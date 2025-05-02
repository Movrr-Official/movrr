import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./slices/sidebarToggle";
import imageUploadReducer from "./slices/imageUpload";
import sidebarHoverReducer from "./slices/sidebarHover";
import transparentSidebarReducer from "./slices/transparentSidebar";

export const store = configureStore({
  reducer: {
    imageUpload: imageUploadReducer,
    sidebarHover: sidebarHoverReducer,
    toggleSidebar: sidebarReducer,
    toggleTransparentSidebar: transparentSidebarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
