import React, { useState } from "react";
import Picture from "./Picture";
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';


// Create Picture component based on data from API
function createEntry(picture, index) {
    return <Picture 
        key={index}
        title={picture.title}
        url={picture.url}
        description={picture.explanation}
        copyright={picture.copyright}
        date={picture.date}
    />;
}

function PictureList(props) {

    return (
        <Grid container alignItems="center" justifyContent="left" spacing={{ xs: 2, md: 3 }}>
            {props.picData.map((item, index) => {
                return createEntry(item, index);
            })}
      </Grid>
  );
}

export default PictureList;