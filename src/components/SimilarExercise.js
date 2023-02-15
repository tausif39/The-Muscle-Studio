import React from 'react'
import { Box,Stack,Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercise = ({targetMuscle , targetEquip}) => {
  return (
    <Box sx={{mt:{lg:"100px",xs:"5px"}}}>
      <Typography variant='h3' m = "20px 0px">
      Exercises Targeting the same Muscle group
      </Typography>
      <Stack direction="row" sx = {{p:"2px", position:'relative'}}>
        {targetMuscle.length?<HorizontalScrollBar data = {targetMuscle} ifBodyPart = {false}/>:<Loader/>}
      </Stack>
      <Typography variant='h3' m = "20px 0px">
      Exercises using the same Equipment
      </Typography>
      <Stack direction="row" sx = {{p:"2px", position:'relative'}}>
        {targetEquip.length?<HorizontalScrollBar data = {targetEquip} ifBodyPart = {false}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercise