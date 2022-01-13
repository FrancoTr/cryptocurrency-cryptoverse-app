import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [crypto.Api.reducerPath]: cryptoApi.reducer,
  },
});
