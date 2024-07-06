import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./featuresCart/cartSlice";
import useReducer from "./featuresCart/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: useReducer,
  },
});
