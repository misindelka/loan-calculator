import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import BlurCircularIcon from '@mui/icons-material/BlurCircular'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <BlurCircularIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MS BANK
          </Typography>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">HOME</Button>
          <Button color="inherit" sx={{ backgroundColor: 'secondary.light' }}>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
