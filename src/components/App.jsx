import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PictureList from "./PictureList";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import {format, isDate, isBefore} from 'date-fns';
import env from 'react-dotenv';


function App() {    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [date, setDate] = React.useState(null);

    function loadPictures() {
        setLoading(true);

        async function fetchData(){
            // TODO: Change to higher count and use dotenv
            var apiUrl = "https://api.nasa.gov/planetary/apod?count=10&api_key=" + "hJpJCLFX4B86WpbI9KkchLScLzaYnayPeiZ2qvnp";
            if(isDate(date) && isBefore(date, Date.now())){
                let start = format(date, 'yyyy-MM-dd')
                apiUrl = "https://api.nasa.gov/planetary/apod?api_key=hJpJCLFX4B86WpbI9KkchLScLzaYnayPeiZ2qvnp&start_date=" + start;
            }
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            setData(apiData);
            setLoading(false);
        };

        fetchData();
        return;
    }

    // Add 5 more images to current set
    function loadMore() {
        setLoading(true);

        async function fetchData(){
            // TODO: Change to higher count and use dotenv
            var apiUrl = "https://api.nasa.gov/planetary/apod?api_key=hJpJCLFX4B86WpbI9KkchLScLzaYnayPeiZ2qvnp&count=10"
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            setData(data => [...data, ...apiData]);
            setLoading(false);
        };

        fetchData();
        return;
    }

    useEffect(() => {
        loadPictures();
    }, []);

    // when data is available, title is shown
    return (
        <div>
            <Header />
            <Grid container alignItems='center' justifyContent='center' spacing={3} sx={{mt: 1}}>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Pictures from..."
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item>
                    <LoadingButton onClick={loadPictures} loading={loading} variant="contained" sx={{bgcolor: "#2C394B", color: 'white'}}>
                        Go
                    </LoadingButton>
                </Grid>
            </Grid>
            <PictureList picData={data} />
            {(data.length !== 0) ? <LoadingButton onClick={loadMore} loading={loading} fullWidth={true} variant="text" sx={{mb: 1, mt: 3, color: "#FF4C29"}}>View More</LoadingButton> : null}
        </div>
    );
}

export default App;