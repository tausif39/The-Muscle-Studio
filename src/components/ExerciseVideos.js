import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos,exerciseName}) => {
    if(!exerciseVideos.length)return <Loader/>;
  return (
    <Box sx = {{margin:{lg : "180px" , xs:"20px"} , p : '20px'}}>
        <Typography variant='h3' mb="33px">
            Watch <span style = {{color:"#ff2625" , textTransform:"capitalize"}}>{exerciseName}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap"
        alignItems = "center" 
        sx = {{flexDirection:{lg : "row"},
        gap:{lg:"110px" , xs:"0px"}}}>
            {exerciseVideos?.slice(0,6).filter((item)=>'video' in item).map((item,index) =>
            {
                return(
                    <a key = {index} 
                    className = "exercise-video"
                    
                    href = {`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel = "norefferer"
                    style = {{width:"280px" , height : "380px"}}>
                        <img src = {item.video.thumbnails[0].url} alt = {item.video.title} style={{width:"387px" ,height:"217px"}}/>
                    <Box>
                        <Typography variant = "h5" color = "#000">
                            {item.video.title}
                        </Typography>
                        <Typography variant = "h6" color = "#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                    </a>
                )
            })}
        </Stack>
    </Box>
    
  )
}

export default ExerciseVideos