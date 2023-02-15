import React from 'react'
import {Box , Button, Stack , Typography} from "@mui/material"
import HeroBannerImg from "../assets/images/banner.png"
const HeroBanner = () => {
  return (
    <Box sx = {{mt:{lg:"200px", xs:"70px" },ml:{sm:"50px"}}}
        position="20px" p = "20px">
        <Typography color = "#FF2625" fontWeight="600"
        fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700" mb="23px" mt = "30px"
        sx = {{fontSize:{lg:"44px" ,xs:"40px"}}}>
            Sweat, Smile <br />And Repeat 
        </Typography>
        <Typography fontSize="22px" lineHeight = "35px" mb="20px">
            Check out the most effective Exercises 
        </Typography>
        <Button mb="20px" href = "#exercise"variant='contained'  color='error'
        sx = {{backgroundColor:"#ff2625"}}>Explore Exercises</Button>
        <Typography fontWeight={600} color = "#ff2625" fontSize="200px" 
        sx = {{opacity: 0.1,
                display:{lg:"block" , xs :"none"}}}>
                Exercises
        </Typography>
        <img className = "hero-banner-img" src = {HeroBannerImg} alt = "banner" />
    </Box>
  )
}

export default HeroBanner