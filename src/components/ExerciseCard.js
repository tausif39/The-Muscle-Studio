import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Button, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
    const scrollWindow = () =>
    {
        window.scrollTo({top:0});
    }
  return (
    <Button onClick = {scrollWindow}>
    <Link className = "exercise-card" to={`/exercise/${exercise.id}/#details`}>
        <img src = {exercise.gifUrl} alt = {exercise.name} loading="lazy"></img>
        <Stack direction = "row">
            <Button sx={{ml:"20px", color:"#fff" ,backgroundColor:"#ffa9a9" ,fontSize:"15px" ,borderRadius:"20px" ,textTransform:"capitalize"}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"20px", color:"#fff" ,backgroundColor:"#fcc757" ,fontSize:"15px" ,borderRadius:"20px" ,textTransform:"capitalize"}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography fontSize="22px" fontWeight="bold" color="black" ml="20px" textTransform="capitalize">
            {exercise.name}
        </Typography>
    </Link>
    </Button>
   
  )
}

export default ExerciseCard