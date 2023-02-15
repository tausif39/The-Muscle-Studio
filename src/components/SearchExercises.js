import React,{useState,useEffect} from 'react'
import {Box , Button,Stack,TextField,Typography} from "@mui/material"
import { borderRadius } from '@mui/system'
import { exerciseOptions,fetchData } from '../utilityFunctions/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExercises = ({exercise,setExercise,bodyPart,setBodyPart}) => {
  const[search,setSearch] = useState("");
  const[bodyParts,setBodyParts] = useState([]);
  useEffect(() => {
    const doStuffs = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);
    }
    doStuffs();} ,[]);


  const handleSearch = async() =>
  {
    if(search)
    {
      const exerData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const exerResult = exerData.filter((exercise) => {return (exercise.name.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        ||  exercise.bodyPart.toLowerCase().includes(search))});
      setExercise([]);
      setExercise(exerResult);
    }
  }
  
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent = "center" p = "20px">
      <Typography sx = {{fontSize:{lg:"44px" ,xs:"30px"}}}
      mb = "50px" textAlign="center">
        Awesome Exercises You <br/> 
        Should Know
      </Typography>
      <Typography>
        <Box position="relative" mb = "72px">
          <TextField
          sx={{
            input:{fontWeight:"700" , border:'none' ,borderRadius:"4px"},
            width:{lg:"1170px" ,xs:"350px"},
            backgroundColor:"white",
            borderRadius:"40px"}}

          height = "70px"
          value = {search}
          onChange={(event)=>{setSearch(event.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type = "text"/>
          <Button className='search-btn'
          sx = {{bgcolor:"#ff2625",color:"white",textTransform:'none',
          width:{lg:"175px",xs:"80px"},
          fontSize:{lg:"20px",xs:"14px"},
          height:"56px",
          position:"absolute",
          right:'0'
          }}
          onClick = {handleSearch}>
            Search
          </Button>
        </Box>
      </Typography>
        <Box sx = {{position:'relative' , width:'100%', p: '20px'}}>
          <HorizontalScrollBar data = {bodyParts} bodyPart = {bodyPart} setBodyPart={setBodyPart} ifBodyPart={true} />

        </Box>
    </Stack>
  )
}

export default SearchExercises