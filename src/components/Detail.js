import React from 'react'
import {Box,Typography,Stack,Button} from "@mui/material"

import BodyIcon from "../assets/icons/body-part.png"
import TargetIcon from "../assets/icons/target.png"
import EquipmentIcon from "../assets/icons/equipment.png"
import { borderRadius } from '@mui/system'


const Detail = ({exerciseDetails}) => {
    const {bodyPart,name , gifUrl , target,equipment} = exerciseDetails

    const extraDetail =
    [
        {
            icon:BodyIcon,
            name:bodyPart
        },
        {
            icon:TargetIcon,
            name:target
        },
        {
            icon:EquipmentIcon,
            name:equipment
        }
    ]
  return (
    <Stack id = "details" gap = "60px" sx = {{flexDirection:{lg:"row"} , p : "20px",alignItems:"center"}}>
        <img src = {gifUrl} alt = {name} loading = "lazy" className = "detail-image"></img>
        <Stack sx = {{gap:{lg:"35px" ,xs:"20px"}}}>
            <Typography variant='h3' textTransform="capitalize">{name}</Typography>
            <Typography variant ="h6">Exercises keep you strong. {name} is one of the best
            exercises to target your {target}. It will help you improve your mood and gain energy</Typography>
            {
                extraDetail.map((item)=>{ return (<Stack key={item.name}
                direction = "row" gap = "24px" alignItems="center">
                    <Button sx = {{background:"#fff2db" ,borderRadius:"50%",
                width:"100px" ,height:"100px"}}>
                        <img src = {item.icon} alt = {bodyPart} style={{width:"50px",height:"50px"}}></img>
                    </Button>
                    <Typography variant='h5' textTransform="capitalize">
                        {item.name}
                    </Typography>
                </Stack>)})
            }
        </Stack>
    </Stack>
  )
}

export default Detail