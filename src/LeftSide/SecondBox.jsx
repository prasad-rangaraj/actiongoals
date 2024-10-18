import React from 'react'
import { Box } from '@mui/material'

const SecondBox = () => {
    return (
        <Box sx={{backgroundColor: "rgb(255, 248, 230)",borderRadius:"8px",padding:"5px",width:"98%"}}>
            <Box sx={{borderLeft: "3px solid rgb(246, 208, 181)"}}>
                <Box sx={{display:"flex",position:"relative",padding:"5px",alignItems:"center"}}>
                    <Box sx={{fontSize:"small"}}><span style={{"fontWeight":"bold"}}>Recent Update</span> By Sarveshwara at 8.00 AM</Box>
                    <Box sx={{position:"absolute",right:"0",color:"rgb(0, 183, 168)"}}><h5>ADD NEW</h5></Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:"small",padding:"5px",fontStretch:"expanded"}}>I've completed the base UI for focus mode in Colabo. Will update link soon.</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SecondBox