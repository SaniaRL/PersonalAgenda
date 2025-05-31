import { useState } from 'react'
import { Box, Link, Typography } from '@mui/material'

import type { MoreInfoModalData } from '../shared/MoreInfoModal'
import type { StatusMessage } from '../../types/ui/StatusMessage'
import StatusIcon from './StatusIcon'
import MoreInfoModal from '../shared/MoreInfoModal'

import '../../App.css'

export interface StatusDisplayProps {
  statusMessage: StatusMessage | null,
  moreInfo?: MoreInfoModalData
}

const infoText: string = 'more info...'

export default function StatusDisplay({statusMessage, moreInfo}: StatusDisplayProps) {
  const [openMoreInfo, setOpenMoreInfo] = useState(false)

  return(
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        marginBottom: '2px',
        alignItems: 'center'
      }}>

      <StatusIcon
        status={statusMessage?.status ?? null}
        sx={{
          fontSize: '18px'
        }}/>

      <Typography>
        {statusMessage?.message}
      </Typography>

      { moreInfo && (
        <>
          <Link 
            component='button' 
            className='info-link' 
            underline='none' 
            variant='body2'
            onClick={() => setOpenMoreInfo(true)}
            sx={{ alignSelf: 'center' }}
          >
            {infoText}
          </Link>

          { openMoreInfo && 
            <MoreInfoModal 
              open={openMoreInfo}
              data={moreInfo}
              handleClose={() => setOpenMoreInfo(false)}
              />
          }
        </>
      )}
    </Box>
  )
}