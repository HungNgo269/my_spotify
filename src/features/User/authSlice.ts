// src/features/auth/authSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../stores/store'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  expiresIn: number | null
  loginStatus: 'idle' | 'loading' | 'authenticated' | 'unauthenticated' | 'error'
  error: string | null
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  loginStatus: 'idle',
  error: null
}

export const setTokensFromUrl = createAsyncThunk<
  { access_token: string; refresh_token: string; expires_in: number },
  { accessToken: string; refreshToken: string; expiresIn: number }
>('auth/setTokensFromUrl', async (payload, thunkAPI) => {
  return {
    access_token: payload.accessToken,
    refresh_token: payload.refreshToken,
    expires_in: payload.expiresIn
  }
})

export const refreshAccessToken = createAsyncThunk<
  { access_token: string; expires_in: number },
  string,
  { rejectValue: string }
>('auth/refreshAccessToken', async (refreshToken, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:4000/api/refresh_token', { refresh_token: refreshToken })
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.error || 'Token refresh failed')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action logout đồng bộ
    logout(state) {
      state.accessToken = null
      state.refreshToken = null
      state.expiresIn = null
      state.loginStatus = 'unauthenticated'
      state.error = null
    }
  },
  extraReducers: (builder) => {
    // (A) setTokensFromUrl
    builder
      .addCase(setTokensFromUrl.pending, (state) => {
        state.loginStatus = 'loading'
        state.error = null
      })
      .addCase(
        setTokensFromUrl.fulfilled,
        (state, action: PayloadAction<{ access_token: string; refresh_token: string; expires_in: number }>) => {
          state.accessToken = action.payload.access_token
          state.refreshToken = action.payload.refresh_token
          state.expiresIn = action.payload.expires_in
          state.loginStatus = 'authenticated'
        }
      )
      .addCase(setTokensFromUrl.rejected, (state, action) => {
        state.loginStatus = 'error'
        state.error = action.error.message ?? 'Cannot set tokens from URL'
      })

    // (B) refreshAccessToken
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.loginStatus = 'loading'
        state.error = null
      })
      .addCase(
        refreshAccessToken.fulfilled,
        (state, action: PayloadAction<{ access_token: string; expires_in: number }>) => {
          state.accessToken = action.payload.access_token
          state.expiresIn = action.payload.expires_in
          state.loginStatus = 'authenticated'
        }
      )
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.loginStatus = 'error'
        state.error = action.payload as string
      })
  }
})

export const { logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
