import { configureStore } from "@reduxjs/toolkit";
import gallerySlices from "./slices/gallerySlices";


export const store = configureStore({
    reducer : {
        gallery: gallerySlices
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch