import { createSlice } from '@reduxjs/toolkit'
import { store } from '../../stores/store'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: string
}

const initialState: ThemeState = {
  theme: 'light-theme'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<any>) {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
export const selectCurrentTheme = () => store.getState().theme
