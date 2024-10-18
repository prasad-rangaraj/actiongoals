import React from 'react'
import { Box, Stack, CircularProgress, Typography, Avatar, Button, Select, MenuItem } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';
import AddIcon from '@mui/icons-material/Add';
import AvatarGroup from '@mui/material/AvatarGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';

const FirstBox = () => {
  return (
    <Box sx={{ border: "1px solid rgb(229, 235, 239)", borderRadius: "10px", padding: "12px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Box
          component="img"
          sx={{ border: "1px solid rgb(241, 241, 241)", borderRadius: "5px", padding: "2px 4px", top: "0" }}
          alt="icon-stacked-image"
          src="/stacked-icon.png"
        />
        <Box sx={{ fontWeight: "bold", fontFamily: "Poppins", paddingLeft: "10px", flex: 1 }}>
          Completion of productivity framework design on or before July 7th, 2021.
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", }}>
          <InfoIcon sx={{ height: "20px", width: "18px" }} />
          <StarIcon sx={{ height: "20px", width: "18px" }} />
          <MoreVertIcon sx={{ height: "20px", width: "18px" }} />
        </Box>
      </Box>

      <Box sx={{ marginTop: "10px", display: "flex" }}>
        <Box sx={{fontSize:"small"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit officia ipsa libero, et repudiandae, suscipit quo aspernatur ... <span style={{fontWeight:"bold",color:"rgb(80, 206, 195)",lineHeight:"25px"}}>Show more</span>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" position="relative">
          <CircularProgress variant="determinate" value={35} size={50} />
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
            sx={{ position: 'absolute' }}
          >
            35%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "5px", marginTop: "10px", position: "relative", borderBottom: "1px dashed rgb(224, 224, 224)", paddingBottom: "12px", alignItems: "center" }}>
        <Box sx={{ borderRadius: "5px", backgroundColor: "rgb(241, 241, 241)", padding: "5px", fontSize: "small" }}>5157-Feature</Box>
        <Box sx={{ borderRadius: "5px", backgroundColor: "rgb(241, 241, 241)", padding: "5px", fontSize: "small" }}>Goal</Box>
        <Box sx={{ borderRadius: "5px", backgroundColor: "rgb(241, 241, 241)", padding: "5px", fontSize: "small" }}>#Colabo</Box>
        <FlagCircleRoundedIcon></FlagCircleRoundedIcon>
        <Box sx={{ position: "absolute", right: "0", display: "flex", paddingRight: "5px" }}>
          <AvatarGroup sx={{ paddingRight: "5px" }} >
            <Avatar sx={{ height: "22px", width: "22px", overflow: "hidden" }} alt="User 1" src="\avatar1.png" />
            <Avatar sx={{ height: "22px", width: "22px", overflow: "hidden" }} alt="User 2" src="\avatar2.png" />
            <Avatar sx={{ height: "22px", width: "22px", fontSize: "small" }}>+2</Avatar>
          </AvatarGroup>
          <AddIcon sx={{ height: "22px", width: "22px", border: "1px dashed rgb(224, 224, 224)", borderRadius: "20px", padding: "3px" }}></AddIcon>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px", borderBottom: "1px dashed rgb(224, 224, 224)", paddingBottom: "10px" }}>
        <CalendarMonthIcon sx={{ marginRight: "15px", height: "18px", borderRadius: "15px", backgroundColor: "rgb(241, 241, 241)", padding: "5px" }} />
        <Typography variant="body2">Jun 29, 2021 . 08:00 PM - Jun 30, 2021 . 08:00 PM</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Overdue
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative", paddingTop: "10px" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box ><TimerIcon sx={{ marginRight: "15px", height: "18px", borderRadius: "50px", backgroundColor: "rgb(241, 241, 241)", padding: "5px" }}></TimerIcon></Box>
          <Box sx={{ borderRight: "2px solid rgb(241, 241, 241)", paddingRight: "5px" }}>
            <Box sx={{ fontSize: "small", color: "rgb(170, 170, 170)" }}>Planned ETA</Box>
            <Box sx={{ fontSize: "small", color: "rgb(136, 136, 136)", fontWeight: "bold" }}>10 hrs</Box>
          </Box>
          <Box>
            <Box sx={{ fontSize: "small", color: "rgb(170, 170, 170)" }}>Actual ETA</Box>
            <Box sx={{ fontWeight: "bold", color: "rgb(0, 183, 168)" }}>+ADD</Box>
          </Box>
        </Box>
        <Box sx={{ position: "absolute", right: "0" }}><Select size="small" value="Pending" displayEmpty>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        </Box>
      </Box>
    </Box>
  )
}

export default FirstBox