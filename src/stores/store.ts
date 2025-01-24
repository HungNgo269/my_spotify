// src/store/index.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/User/authSlice'
import themeReducer from '../features/User/themeSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer
  // Thêm các reducers khác tại đây nếu có
})

// Bước 2: Cấu hình persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'theme'],

  blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
