// internal imports
import { Box } from '@mui/system'
import SayAboutUs from './components/sayAboutUs'

export const SectionThree = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" mt={4}>
      <SayAboutUs />
    </Box>
  )
}
