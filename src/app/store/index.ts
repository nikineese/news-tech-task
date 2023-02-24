import { configureStore } from "@reduxjs/toolkit";

import { newsModel } from "entities/news";
import { authModel } from "entities/auth";

export const store = configureStore({
  reducer: {
    news: newsModel.newsReducer,
    auth: authModel.authReducer,
  },
});
