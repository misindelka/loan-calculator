// external imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

export function LoanSlider({ config }) {
  const { value, step, min, max, defaultValue, setValue, title, detail } = config
  const isLoan = detail === '$'

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      sx={{
        backgroundColor: 'secondary.light',
        borderTopLeftRadius: isLoan && 5,
        borderTopRightRadius: isLoan && 5,
      }}
    >
      <Box display="flex" flexDirection="column" justifyContent="center" width="100%">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography sx={{ fontSize: 18 }} color="white" fontWeight="bold">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} color="primary.light">
            {detail} {value}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={defaultValue}
              step={step}
              min={min}
              max={max}
              value={value}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography hy sx={{ fontSize: 14 }} color="white" fontWeight="bold">
            {isLoan && '$'} {min}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="white" fontWeight="bold">
            {isLoan && '$'} {max}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
