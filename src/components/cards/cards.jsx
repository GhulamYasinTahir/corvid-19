import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css';
import cx from 'classnames'
import CountUp from 'react-countup';



const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {

  
  if(!confirmed){
    return 'loading...';
  }

    console.log( deaths);
    if(!deaths){
      return 'loading...';
    }
    
   
    if(!recovered){
      return 'loading...';
    }
   
    return(
       <div className = {styles.container}>
           <Grid container spacing ={3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.deaths,styles.card)}>
                  <CardContent>
                    <Typography color="initial" gutterBottom> Total infected </Typography>
                    <Typography variant="h6"><CountUp start={0} end={confirmed.value} duration={3} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>Active cases of Covid-19</Typography>
                  </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                  <CardContent>
                    <Typography color="initial" gutterBottom> Recovered </Typography>
                    <Typography variant="h6"><CountUp start={0} end={recovered.value} duration={3} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>The people recovered from Covid-19</Typography>
                  </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                  <CardContent>
                    <Typography color="initial" gutterBottom> Deaths </Typography>
                    <Typography variant="h6"><CountUp start={0} end={deaths.value}duration={3} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>Number of deaths caused by Covid-19</Typography>
                  </CardContent>
                </Grid>

           </Grid>
           

       </div>
    );
}

export default Cards;