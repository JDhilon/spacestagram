import React, { useState } from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Picture(props) {
    const [isLiked, setLiked] = useState(false);

    function handleLike(event){
        setLiked(!isLiked);
        event.preventDefault();
    }

    // Picture components resize themselves responsively in a grid to be viewed comfortably on desktop, tablet, or mobile
    return (
    <Grid item xs={12} md={6} lg={4} xl={3} sx={{mt: 1}}>
        <ImageListItem key={props.id}>
            <img
            src={props.url}
            alt={props.title}
            />
            <ImageListItemBar
                title={props.title}
                actionIcon={
                    isLiked ? 
                        <IconButton sx={{ color: 'red' }} onClick={handleLike}> <FavoriteIcon /> </IconButton> 
                        : 
                        <IconButton sx={{ color: 'white' }} onClick={handleLike}> <FavoriteBorderIcon /> </IconButton>
                }
                subtitle={props.copyright + '\t' + props.date}
                actionPosition="right"
            />
        </ImageListItem>
    </Grid>
  );
}

export default Picture;