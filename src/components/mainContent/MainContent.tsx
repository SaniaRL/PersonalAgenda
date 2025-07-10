import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { useLoadingStore } from '../../utils/loading'
import { useStatusStore } from '../../utils/status'
import type { PostCategory } from '../../types/dto/PostCategory'
import PostCategoryToggleList from '../posts/postcategory/PostCategoryToggleList'
import type { UpdatePayload } from '../../types/data/UpdatePayload'
import { API_BASE_URL } from '../../consts/api'
import { sendApiRequest } from '../../utils/crud'

export default function MainContent() {
  const startLoading = useLoadingStore((state) => state.startLoading)
  const stopLoading = useLoadingStore((state) => state.stopLoading)
  const setStatus = useStatusStore((state) => state.setStatus)
  const clearStatus = useStatusStore((state) => state.clearStatus)
  const [postCategories, setPostCategories] = useState<PostCategory[]>([])

  useEffect(() => {
    const fetchPostCategories = async () => {
      startLoading({key: 'load-post-categories', message: 'Loading post categories'})
      try {
        const response = await fetch(API_BASE_URL + '/post-category')
        const data: PostCategory[] = await response.json()
        console.log(data)
        setPostCategories(data)
      } catch (error: any){
        setStatus('GET_ALL_POSTCATEGORIES')
      } finally {
        stopLoading('load-post-categories')
      }
    }
    fetchPostCategories()
  }, [])

  async function onDataChange(data: UpdatePayload | undefined) {
    if(data === undefined) return
    //Set loading? SKicka med loading påpeka inte nu för det är sen när det funkar.
    try {
      const response = await sendApiRequest(data)
      if(response?.ok) {
        switch(data.CRUD) {
          case 'PUT':
            const updatedItem = (await response.json()).value
            console.log(updatedItem)
            switch(data.type) {
              case 'post-category': setPostCategories(prev => 
                prev.map(item => 
                  item.id === updatedItem.id
                  ? {...item, ...updatedItem}
                  : item
                )
              )
            }
        }
      }
    } catch {

    } finally {

    }
  }

  return(
    <Container>
      <PostCategoryToggleList 
        postCategories={postCategories} 
        onDataChange={onDataChange}
      />

      {/* <Box>
        <Button 
          onClick={() => startLoading({ 
            key: 'load1', 
            message: 'Loading important button press stuff' 
          })}
      >())
          Load something chill?
        </Button>
        <Button 
          onClick={() => stopLoading('load1')}
        >
          Stop loading
        </Button>
        <Button 
          onClick={() => {
            startLoading({key: 'load2', message: 'Loading problenatic button press stuff'})
            setStatus('PROBLEMATIC_BUTTON')
          }}
        >
          Start loading problematic?
        </Button>
        <Button 
          onClick={() => {
            stopLoading('load2')
            clearStatus()
          }}
        >
          Stop loading problematic
        </Button>
      </Box> */}
    </Container>
  )
}