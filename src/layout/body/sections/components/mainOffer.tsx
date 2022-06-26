// external imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'

export default function MainOffer() {
  return (
    <Box p={4} height={350} width={400} sx={{ backgroundColor: 'primary.light', borderRadius: 2 }}>
      <Box display="flex" flexDirection="row" mb={4}>
        <Typography variant="h5" fontSize={30} fontWeight="bold ">
          What is Lorem Ipsum?
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box mr={2}>
          <CheckIcon sx={{ color: 'green', fontSize: 30 }} />
        </Box>
        <Typography variant="body2" fontSize={20}>
          Lorem ipsum dolor sit amet
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box mr={2}>
          <CheckIcon sx={{ color: 'green', fontSize: 30 }} />
        </Box>
        <Typography variant="body2" fontSize={20}>
          Ut enim ad minim veniam
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box mr={2}>
          <CheckIcon sx={{ color: 'green', fontSize: 30 }} />
        </Box>
        <Typography variant="body2" fontSize={20}>
          Excepteur sint occaecat cupidatat non
        </Typography>
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Button color="inherit" sx={{ backgroundColor: 'secondary.light' }}>
          Learn More
        </Button>
      </Box>
    </Box>
  )
}
