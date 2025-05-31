import type { ReactNode } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

export interface MoreInfoModalProps {
  open: boolean
  data: MoreInfoModalData
  handleClose: () => void
}

export interface MoreInfoModalData {
  title: string
  content: ReactNode
}

const buttonText = 'Ok'

export default function MoreInfoModal({open, data, handleClose}: MoreInfoModalProps) {
  return(
    <Dialog 
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>
        {data.title}
      </DialogTitle>
      <DialogContent id='alert-dialog-description'>
        {data.content}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          {buttonText}
        </Button>        
      </DialogActions>
    </Dialog>
  )
}