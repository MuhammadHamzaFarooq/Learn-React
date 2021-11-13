import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '1100px',
        margin: 'auto',
        marginTop: '70px',
       

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
    title:{
        color: '#3384f5',
        fontSize:'1rem',
        fontWeight:'700',
        textTransform:'uppercase',
    }
  
}));

export default function InfoPanel() {

    const [GlobalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            let apiResponse = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats');
            let jsonData = await apiResponse.json();
            console.log(jsonData);
            delete jsonData.data.last_update;
            setGlobalData(jsonData.data);
        }
        getData();
    },[] );



    const classes = useStyles();

    // https://covid19.mathdro.id/api

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    Object.keys(GlobalData).map((key, index) => {
                        return (
                            <Grid item xs={12} sm={4} key={index} >
                                <Paper  className={classes.paper} elevation={3} >
                                    <h3 className={classes.title}>
                                     {key.replace( /_/g, ' ')}  <br />
                                    </h3>
                                     {GlobalData[key].replace( /,/g, '')}
                                 </Paper>
                            </Grid>
                        )
                    })
                }



            </Grid>
        </div>
    );
}
