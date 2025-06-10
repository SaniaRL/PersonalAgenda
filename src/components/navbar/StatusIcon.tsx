import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'

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
      return( <WarningAmberOutlinedIcon sx={ sx }/> )
    case 'error':
      return( <ErrorOutlineOutlinedIcon sx={ sx } /> )
  }
}