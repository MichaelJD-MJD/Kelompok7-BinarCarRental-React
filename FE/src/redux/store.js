import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

// it will make temporary global state (FE Database)
export const store = configureStore({
    reducer: slices,
    devTools: import.meta.env.MODE == "development",
}); 