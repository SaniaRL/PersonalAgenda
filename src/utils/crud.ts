import { API_BASE_URL } from '../consts/api';
import type { UpdatePayload } from '../types/data/UpdatePayload'

export async function sendApiRequest(x: UpdatePayload) {
  const value = resolvePayloadValue(x);
  try {
    const options = x.CRUD === 'GET'
      ? undefined
      : {
        method: x.CRUD,
        headers: { 'Content-Type': 'application/json' },
        body: value === undefined ? undefined : JSON.stringify(value)
      }
    const response = await fetch(constructEndpoint(x), options)
    return response

  } catch (error: any){
    console.log('error in sendApiRequest')
    console.error(error)
  }

}

const constructEndpoint = (x: UpdatePayload) => {
  const type = x.type
  const id = x.id
  const property = resolvePayloadProperty(x)

  const segments = [ API_BASE_URL, type, id, property ].filter(Boolean)

  return segments.join('/')
}

const resolvePayloadValue = (x: UpdatePayload) => {
  return x.includePropertyInUrl 
    ? x.updates 
      ? Object.values(x.updates)[0] 
      : undefined
    : x.updates
}

const resolvePayloadProperty = (x: UpdatePayload) => {
  return x.includePropertyInUrl
    ? x.updates ? Object.keys(x.updates)[0] : undefined
    : undefined
}