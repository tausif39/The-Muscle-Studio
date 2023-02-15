import React from 'react'
import {Stack,Box,Typography} from "@mui/material"
import Icon from "../assets/icons/all.png"


const BodyPart = ({item,bodyPart,setBodyPart}) => {
  const name = item.toLowerCase();
  const arr = ['all' , 'back','cardio','chest'];
  return (
    <Stack type = "button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    sx = {{
        borderTop:item === bodyPart ? '3px solid #ff2625' : "null",
        width:'270px',
        height:'280px',
        cursor:'pointer',
        backgroundColor:"#fff",
        borderBottomLeftRadius:"20px",
        gap:"47px"
    }}
    onClick = {(() => 
        {setBodyPart(item)
         window.scrollTo({top:1800,left:100,behaviour:'smooth'})})}
    >
        <img src ={arr.includes(name) ? require(`../assets/icons/${name}.png`):Icon} alt = "gym" style={{width:"60px" ,height:"60px"}}/>
    <Typography fontSize="24px" forntWeight = "bold" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart