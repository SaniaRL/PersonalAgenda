import { create } from 'zustand'
import type { StatusMessage } from '../types/ui/StatusMessage'
import { statusDataMap } from '../consts/status'
import type { MoreInfoModalData } from '../components/shared/MoreInfoModal'

export interface StatusData {
  statusMessage: StatusMessage
  moreInfo?: MoreInfoModalData
}

interface StatusState {
  currentStatus: StatusData | null
  setStatus: (key: string) => void
  clearStatus: () => void
}

export const useStatusStore = create<StatusState>((set) => ({
  currentStatus: null,
  setStatus: (key) => set(() => ({ currentStatus: statusDataMap[key] ?? null })),
  clearStatus: () => set({ currentStatus: null }),
}))
