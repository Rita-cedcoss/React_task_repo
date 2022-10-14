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
        <Box id="bottom2">
            <Box className="bttm2top1">
              <Typography variant='h3' className='h3btm'>Get Started with Apptio Today</Typography>
              <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </Box>
            <Box className="bttm2top2">
                <input className='inpcss' placeholder='First Name'></input><input placeholder='Last Name' className='inpcss'></input><br></br>
                <input className='inpcss' placeholder='Work Email'></input><input placeholder='Phone' className='inpcss'></input><br/>
                <input className='inpcss' placeholder='Company'></input><input placeholder='Job Function' className='inpcss'></input><br/>
                <input className='inpcss1' placeholder='Country'></input><br/>
                <textarea className='inpcss2' placeholder='How can we help?'></textarea><br></br>
                <button className='inpcss21'>Get Started</button>
            </Box>
            <Box className="bttm2top3">
                <Box id="endtop2"><img alt='' height="100%" width="100%" src="right1.png"></img></Box>
                <Box id="endbottm2"><img alt='' height="100%" width="100%" src="right2.png"></img></Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Project2