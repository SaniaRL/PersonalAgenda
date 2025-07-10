import { List} from '@mui/material'
import type { PostCategory } from '../../../types/dto/PostCategory'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import PostCategoryToggleItem from './PostCategoryToggleItem'
import type { UpdatePayload } from '../../../types/data/UpdatePayload'

export interface PostCategoryToggleListProps {
  postCategories: PostCategory[]
  onDataChange?: (update?: UpdatePayload) => void 
}

export default function PostCategoryToggleList({postCategories, onDataChange}: PostCategoryToggleListProps) {
  const [items, setItems] = useState(postCategories)

  useEffect(() => {
      setItems(postCategories.slice().sort((a, b) => a.index - b.index))
    }, [postCategories])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 120,
        tolerance: 5,
      },
    })
  )
  
  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over?.id)
      const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
        ...item,
        index,
      }))
      setItems(newItems)
      // Skicka PUT request med newItems för att uppdatera backend
    }
  }

  return(
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <List sx={{ backgroundColor: (theme) => theme.palette.background.default, gap: '8px', padding: '4px' }}>
        <SortableContext 
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}>
          {items.map(item => (
            <PostCategoryToggleItem 
              key={item.id} 
              id={item.id} 
              item={item} 
              onDataChange={onDataChange}
            />
          ))}
        </SortableContext>
      </List>
    </DndContext>
  )
}