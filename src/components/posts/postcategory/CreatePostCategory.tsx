import { TextField } from '@mui/material'

export interface CreatePostCategoryProps {
  onCreate: () => void
}

export default function CreatePostCategory({onCreate}: CreatePostCategoryProps) {
  return(
    <TextField label='New Category' variant='outlined' />
    //Color picker x 2
    //Create button
  )
}