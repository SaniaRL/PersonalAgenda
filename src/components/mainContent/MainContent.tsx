import { Box, Button, Container } from '@mui/material'
import { useLoadingStore } from '../../utils/loading'
import { useStatusStore } from '../../utils/status'

// interface MainContentProps {
// }

export default function MainContent() {
  const startLoading = useLoadingStore((state) => state.startLoading)
  const stopLoading = useLoadingStore((state) => state.stopLoading)
  const setStatus = useStatusStore((state) => state.setStatus)
  const clearStatus = useStatusStore((state) => state.clearStatus)

  return(
    <Container>
      <Box>
        <Button 
          onClick={() => startLoading({ 
            key: 'load1', 
            message: 'Loading important button press stuff' 
          })}
        >
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
      </Box>
    </Container>
  )
}