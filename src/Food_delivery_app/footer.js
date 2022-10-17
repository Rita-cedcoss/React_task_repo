import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Box id="footer">
        <Button style={{fontSize:"24px" }} variant="outlined" className='btnfoot1'><i style={{color:"rgb(121, 39, 37)" }} class="fa fa-angle-double-up"></i></Button>
        <Button variant='contained' className='btnfoot'> Continued</Button>
        </Box>
    </>

  )
}

export default Footer