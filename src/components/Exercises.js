import React,{useState,useEffect} from 'react'
import {Box,Stack,Typography,Pagination} from "@mui/material"
import { fetchData,exerciseOptions } from '../utilityFunctions/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from "./Loader"

const Exercises = ({exercise,setExercise,bodyPart,setBodyPart}) => {

  useEffect(()=>{
    const doStuffs = async() =>
    {
      let exerciseData = [];
      if(bodyPart === 'all')
      {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }
      else
      {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercise([]);
      setExercise(exerciseData);
    }
    doStuffs();
  },[bodyPart])
  
  const[currentPage,setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const index_last = currentPage * exercisePerPage;
  const index_first = index_last - exercisePerPage;

  const currentExercise = exercise.slice(index_first,index_last);
  
  const paginate = (event,value) =>
  {
    setCurrentPage(value);
    window.scrollTo({top:1800 , behavior:"smooth"})
  }
  return (
    <Box id = "exercise"
    sx = {{mt:{lg:'110px'}}}
    mt="50px"
    p = "50px">
    <Typography variant = "h3" mb="46px">
      Showing Results
    </Typography>
    <Stack direction="row" sx={{gap:{lg:"110px", xs:"50px"}}}
    flexWrap = "wrap"
    justifyContent="center"
     >
    {currentExercise.map((exercise,index) => <ExerciseCard key={index} exercise = {exercise} />)}
    </Stack>
    <Stack mt = "100px" direction = "row" alignItems="center" justifyContent="center">
    {
      exercise.length > 9 && (
        <Pagination
        color='standard'
        shape = "rounded"
        count = {Math.ceil(exercise.length/9)}
        page = {currentPage}
        onChange = {paginate}
        >

        </Pagination>
      )
    }
    </Stack>
    </Box>
  )
}

export default Exercises