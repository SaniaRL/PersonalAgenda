export interface UpdatePayload {
  type: 'post' | 'post-category'
  CRUD: 'GET' | 'PUT' | 'POST' | 'DELETE'
  id?: number 
  updates?: { [key: string]: any }
  includePropertyInUrl?: boolean
}