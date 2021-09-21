import React from "react";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <header>
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <PhotoCameraIcon fontSize="large" sx={{color: "#FF4C29"}}/>
        </Grid>
        <Grid item xs={8}>
            <h1>Spacestagram</h1>
        </Grid>
        <Grid item xs={2}>
            <Avatar>
                <PersonIcon fontSize="large" sx={{textAlign: "right"}}/>
            </Avatar>
        </Grid>
    </Grid>

    </header>
  );
}

export default Header;
