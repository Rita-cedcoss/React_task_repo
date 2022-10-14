import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Project2 = () => {
  return (
    <>
    <Box id="outer2">
        <AppBar className='nav'>
            <Toolbar>
                <img alt='' height="40px" width="150px" src="apptiologo.png"></img>
               <div id="navright">
               <Typography variant='body1' >Solution</Typography>
                <Typography variant='body1'>Products</Typography>
                <Typography variant='body1'>Resources</Typography>
                <Typography variant='body1'>Company</Typography>
                <button id="btnget">Get Started</button>
                <Typography variant='body1'>Search</Typography>
               </div>
                
               
            </Toolbar>
        </AppBar>
        <Box id="bottom2"></Box>
    </Box>
    </>
  )
}

export default Project2