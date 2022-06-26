// external Imports

import { Box } from '@mui/system'

// internal imports
import { LoanCalculator } from '../../../components/loanCalculator'
import MainOffer from './components/mainOffer'
export const SectionOne = () => {
  const summerTreesStreet = require('../../../assets/summerTreesStreet.jpeg')

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      height={700}
      sx={{
        backgroundImage: `url(${summerTreesStreet})`,
        backgroundSize: 'cover',
        backdropFilter: '10px',
      }}
      // sx={{ backgroundColor: 'info.main' }}
    >
      <MainOffer />
      <LoanCalculator />
    </Box>
  )
}
