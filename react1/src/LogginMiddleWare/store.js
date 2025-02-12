import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(
        createLoggingMiddleware({
          actionTypes: ['posts/fetchPosts/fulfilled'], // 특정 액션만 로깅
          development: process.env.NODE_ENV === 'development'
        })
      )
  });