// internal imports

import { Box } from '@mui/system'
import AboutUs from './components/aboutUs'

export const SectionTwo = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      p={4}
      height={600}
      sx={{ backgroundColor: '#ffd180' }}
    >
      <AboutUs />
    </Box>
  )
}
