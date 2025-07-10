import { useSortable } from '@dnd-kit/sortable'
import { Box, Checkbox, ListItem } from '@mui/material'
import { CSS } from '@dnd-kit/utilities'
import type { PostCategory } from '../../../types/dto/PostCategory'
import type { UpdatePayload } from '../../../types/data/UpdatePayload'

export interface PostCategoryToggleItemProps {
  id: number
  item: PostCategory
  onDataChange?: (update?: UpdatePayload) => void
}

export default function PostCategoryToggleItem({ id, item, onDataChange }: PostCategoryToggleItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  
  const updateDisplaySetting = () => {
    onDataChange?.({
      type: 'post-category',
      CRUD: 'PUT',
      id: item.id,
      updates: {displayPosts: !item.displayPosts},
      includePropertyInUrl: true 
    })
  }

  return(
    <ListItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        borderRadius: '8px', 
        backgroundColor: (theme) => theme.palette.background.paper,
        cursor: 'move',
        marginBottom: '8px',
        '&:last-child': { marginBottom: 0 } }}>
      <Box 
        sx={{ 
          display: 'inline-block',
          minWidth: '20ch',
          maxWidth: '20ch',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          userSelect: 'none'
        }}
      >
        {item.title}
      </Box>
      <Checkbox
        checked={item.displayPosts}
        onChange={updateDisplaySetting}
        sx={{
          color: item.backgroundColor,
          padding: 0,
          '& svg': {
            fill: item.backgroundColor,
          },
        }}
      />
    </ListItem>
  )
}