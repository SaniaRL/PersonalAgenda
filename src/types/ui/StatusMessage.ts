export interface StatusMessage {
  status: StatusLevel
  message: string | null
}

export type StatusLevel = 'warning' | 'error'