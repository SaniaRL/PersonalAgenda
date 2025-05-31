import type { StatusData } from '../utils/status'

export const statusDataMap: Record<string, StatusData> = {
  'PROBLEMATIC_BUTTON': {
    statusMessage: { status: 'error', message: 'Problematic button problems' },
    moreInfo: { title: 'Problamatic error', content: <><h3>Problamatic</h3> <p>stuff happened</p> <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">learn more</a></> }
  }
}

export function getStatusMessage(key: string): StatusData | null {
  return statusDataMap[key] ?? null
}
