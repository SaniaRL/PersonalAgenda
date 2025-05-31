import { create } from 'zustand'

export interface LoadingData {
  key: string
  message: string | null
}

interface LoadingState {
  loadingList: LoadingData[]
  startLoading: (data: LoadingData) => void
  stopLoading: (key: string) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  loadingList: [],
  startLoading: (data) =>
    set((state) => ({
      loadingList: [...state.loadingList, data],
    })),
  stopLoading: (key) =>
    set((state) => ({
      loadingList: state.loadingList.filter((item) => item.key !== key),
    })),
}))
