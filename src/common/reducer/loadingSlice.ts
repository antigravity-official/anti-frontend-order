import {
  createSlice,
} from '@reduxjs/toolkit'

type LoadingState = {
  isLoading: boolean;
}
const initialState: LoadingState = {
  isLoading: true
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showProgress: (
      state: LoadingState
    ) => {
      state.isLoading = true
    },
    hideProgress: (
      state: LoadingState
    ) => {
      state.isLoading = false
    }
  }
})

export const {
  showProgress, hideProgress
} = loadingSlice.actions

export default loadingSlice.reducer
