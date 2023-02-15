import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material"
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import { exerciseOptions,fetchData,ytOptions } from "../utilityFunctions/fetchData";

function ExerciseDetail()
{
    const [exerciseDetails,setExerciseDetails] = useState({});
    const [exerciseVideos,setExerciseVideos] = useState([]);
    const [targetMuscle,setTargetMuscle] = useState([]);
    const [targetEquip,setTargetEquip] = useState([]);
    const {id} = useParams(); 
    useEffect(()=>{
        const doStuffs = async() =>
        {
            const exerciseUrl = "https://exercisedb.p.rapidapi.com/exercises"
            const ytUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseData = await fetchData(`${exerciseUrl}/exercise/${id}`,exerciseOptions)
            setExerciseDetails(exerciseData);
            const exerciseVdo = await fetchData(`${ytUrl}/search?query=${exerciseData.name} exercise`,ytOptions)
            setExerciseVideos(exerciseVdo.contents);
            const muscle = await fetchData(`${exerciseUrl}/target/${exerciseData.target}`,exerciseOptions);
            setTargetMuscle(muscle);
            const equip = await fetchData(`${exerciseUrl}/equipment/${exerciseData.equipment}`,exerciseOptions);
            setTargetEquip(equip);
        }
        doStuffs();
    },[id])
    return (
        <Box>
            <Detail exerciseDetails = {exerciseDetails}/>
            <ExerciseVideos exerciseVideos = {exerciseVideos} exerciseName = {exerciseDetails.name}/>
            <SimilarExercise targetMuscle = {targetMuscle} targetEquip={targetEquip}/>
        </Box>
    )
}
export default ExerciseDetail;