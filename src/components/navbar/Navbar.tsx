import { AppBar, Box, LinearProgress, Tooltip } from '@mui/material'

import StatusDisplay from './StatusDisplay'
import SettingsPanel from './SettingsPanel'
import { useLoadingStore } from '../../utils/loading'
import { useStatusStore } from '../../utils/status'

export default function Navbar() {
  const loadingList = useLoadingStore((state) => state.loadingList)
  const statusData = useStatusStore(state => state.currentStatus)
  const isLoading = loadingList.length > 0

  return(
    <AppBar>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <SettingsPanel  />
      </Box>
      { statusData &&
        <StatusDisplay 
          statusMessage={statusData.statusMessage} 
          moreInfo={statusData.moreInfo}
        />
      }
      { isLoading &&
        <Tooltip title={loadingList[0]?.message}>
          <LinearProgress />
        </Tooltip>
      }
    </AppBar>
  )
}