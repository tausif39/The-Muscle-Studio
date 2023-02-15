import React,{useContext} from 'react'
import { Box,Stack } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import LArrow from "../assets/icons/left-arrow.png";
import RArrow from "../assets/icons/right-arrow.png";
import ExerciseCard from './ExerciseCard';

const CreateCard = ({item,bodyPart,setBodyPart}) =>
{
    return (
        <Box 
         m = "0 40px">
        <BodyPart 
        item = {item}
        bodyPart = {bodyPart}
        setBodyPart ={setBodyPart}/>
     </Box>
    )
}
const LeftArrow = () =>
{
    const {scrollPrev} = useContext(VisibilityContext);


    return( <Box onClick = {() => scrollPrev()} className="left-arrow">
        <img src ={LArrow} alt = "left"  />
        </Box>
    )
}
const RightArrow = () =>
{
    const {scrollNext} = useContext(VisibilityContext);


    return( <Box onClick = {() => scrollNext()} className = "right-arrow">
        <img src ={RArrow} alt = "right" />
        </Box>
    )
}
const HorizontalScrollBar = ({data,bodyPart,setBodyPart,ifBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {ifBodyPart?data.map((item) => <CreateCard key = {item.id || item} title ={item.id || item} 
    itemId = {item.id || item} 
    item = {item}
    bodyPart = {bodyPart}
    setBodyPart = {setBodyPart}/>
    ) : data.map((item) => {return <Stack m = "0 70px"><ExerciseCard key = {item.id || item} exercise={item}/></Stack>})}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar