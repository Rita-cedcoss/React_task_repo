import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <Box>
        <Box>
          <AppBar>
           <Toolbar>
            <Typography varient="body1">Break Your Fast</Typography>
            <Typography varient="body1">Time for Lunch</Typography>
            <Typography varient="body1">Can I Have Snacks</Typography>
            <Typography varient="body1">Dinner</Typography>
            <Typography varient="body1">Burger and Beverages</Typography>
            <Typography varient="body1">More...</Typography>
           </Toolbar>
          </AppBar>
        </Box>
    </Box>
    </>
  )
}

export default Navbar