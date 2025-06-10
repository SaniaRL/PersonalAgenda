import { AppBar, Box, LinearProgress, Tooltip } from '@mui/material'

import StatusDisplay from './StatusDisplay'
import SettingsPanel, { type SettingsPanelProps } from './settingsPanel/SettingsPanel'
import { useLoadingStore } from '../../utils/loading'
import { useStatusStore } from '../../utils/status'

export interface NavbarProps {
  settingsPanelProps: SettingsPanelProps
}

export default function Navbar({settingsPanelProps}: NavbarProps) {
  const loadingList = useLoadingStore((state) => state.loadingList)
  const statusData = useStatusStore(state => state.currentStatus)
  const isLoading = loadingList.length > 0

  return(
    <>
      <AppBar>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <SettingsPanel colorThemePickerProps={settingsPanelProps.colorThemePickerProps}/>
        </Box>
        <Box sx={{ height: {xs: 'auto', md: '24px'} }}>
          { statusData &&
            <StatusDisplay 
              statusMessage={statusData.statusMessage} 
              moreInfo={statusData.moreInfo}
            />
          }
        </Box>
        { isLoading &&
          <Tooltip title={loadingList[0]?.message}>
            <LinearProgress color='primary' sx={{
              marginBottom: '-4px'
            }}/>
          </Tooltip>
        }
      </AppBar>
     </>
   )
}