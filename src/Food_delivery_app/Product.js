import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Product = () => {
    const arr=[
        {
            "Productname":"Plain Dosa",
             "image":"https://tasteofindiamanali.in/wp-content/uploads/2021/09/Plain-dosa.jpg",
             "price":"Rs.20"
        },
        {
            "Productname":"Poori",
             "image":"https://www.awesomecuisine.com/wp-content/uploads/2020/03/poori-masala-kizhangu.jpg",
             "price":"Rs.30"
        },{
            "Productname":"Masala Dosa",
             "image":"https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.merirasoi.com/wp-content/uploads/2020/05/masala-dosa-recipe-780x390-1.jpg",
             "price":"Rs.20"
        },{
            "Productname":"Plain Dosa",
             "image":"https://tasteofindiamanali.in/wp-content/uploads/2021/09/Plain-dosa.jpg",
             "price":"Rs.20"
        },{
            "Productname":"Mangalor Bhajji",
             "image":"https://www.awesomecuisine.com/wp-content/uploads/2015/08/mangalore-bonda.jpg",
             "price":"Rs.20"
        },{
            "Productname":"Andhra Veg Meals",
             "image":"https://i.ytimg.com/vi/WvrbDOHGGMM/maxresdefault.jpg",
             "price":"Rs.20"
        },{
            "Productname":"Plain Dosa",
             "image":"https://tasteofindiamanali.in/wp-content/uploads/2021/09/Plain-dosa.jpg",
             "price":"Rs.20"
        }
    ]
    return (
    <Box id="product">
        <Box class="grid-container">
        {
                arr.map((item)=>{
                    return(
                        <>
                        <Box class="grid-item">
            
            <Box className='gridleft'>
                <Typography varient="body1">{item.Productname}</Typography>
                <img alt='' className='imgveg' src="veg.png" height="20px" width="20px"></img><span id="vegfont">veg</span>
                <Typography variant='body1' className='prod_price'>{item.price}</Typography>
                <Button variant="outlined">Add to Cart</Button>
            </Box>
            <Box className='gridright'>
                <img className='imggrid' alt='' height="100%" width="100%" src={item.image}/>
            </Box>
         </Box>
                        </>
                    )
                })
            }
        </Box> 
    </Box>
  )
}

export default Product