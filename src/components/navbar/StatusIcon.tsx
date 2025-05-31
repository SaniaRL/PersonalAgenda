import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'

import type { StatusLevel } from '../../types/ui/StatusMessage'
import type { SxProps, Theme } from '@mui/material'

interface StatusIconProps {
  status: StatusLevel | null
  sx?: SxProps<Theme> | undefined
}

export default function StatusIcon({status, sx}: StatusIconProps) {
  if(!status) return null
  switch(status) {
    case 'warning':
      return( <WarningIcon sx={ sx }/> )
    case 'error':
      return( <ErrorIcon sx={{ fontSize: '16px'}} /> )
  }
}