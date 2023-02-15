import React,{useState} from "react";
import {Box} from "@mui/material";
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home()
{
    const[exercise,setExercise] = useState([]);
    const[bodyPart,setBodyPart] = useState('all');
    return(
        <Box>
            <HeroBanner />
            <SearchExercises
            exercise = {exercise}
            setExercise = {setExercise}
            bodyPart = {bodyPart}
            setBodyPart = {setBodyPart} />
            <Exercises 
            exercise = {exercise}
            setExercise = {setExercise}
            bodyPart = {bodyPart}
            setBodyPart = {setBodyPart}/>
        </Box>
    )
}
export default Home;