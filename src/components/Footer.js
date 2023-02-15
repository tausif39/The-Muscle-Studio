import React from "react";
import {Box,Stack,Typography} from "@mui/material"
import Logo from "../assets/images/Logo-2.png"
function Footer()
{
    return <Box mt = "80px" bgcolor="#fff3f4">
        <Stack gpa = "40px"  alignItems="center">
            <img src={Logo} alt = "logo" width = "200px" height="50px"/>
            <Typography variant = "h5" mt = "20px" p = "40px">
                Made With 💙 by Subrat
            </Typography>
        </Stack>
    </Box>
}
export default Footer;