import { useState } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function BottomNavigationBar() {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%', backgroundColor: 'secondary.light' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        sx={{ width: '100%', backgroundColor: 'secondary.light' }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" sx={{ color: 'white' }} icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" sx={{ color: 'white' }} icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
