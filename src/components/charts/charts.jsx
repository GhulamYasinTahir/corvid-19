import React, {useState, useEffect} from 'react'
import {Line, Bar} from 'react-chartjs-2'
import {fetchDailyData} from '../../api/api'
//import Bar from 'react-chartjs-2'
import styles from './charts.module.css';
import { rgbToHex } from '@material-ui/core';

const Chart = ({data: {confirmed,recovered,deaths}, country}) =>{

    const [dailyData, setDailyData] = useState ([]);
    useEffect(()=>{
        const fetchApi = async ()=>{ setDailyData(await fetchDailyData());
        }

       //console.log(dailyData)
        fetchApi();
    },[]);
    const LineChart = (
        dailyData.length
         ?(<Line data={{ labels: dailyData.map(({date}) => date), 
        datasets: [{data:dailyData.map(({confirmed}) => confirmed), label: 'infected', borderColor: 'blue', fill:true,}, 
                   {data:dailyData.map(({deaths}) => deaths), label:'deaths', borderColor:'red', fill:true,}], }}/>): null
       
    );

    const barChart = (
        confirmed ?(
            <Bar 
            data={{labels:['infected','recovered','deaths'],
            datasets:[{label:'people',
            backgroundColor:['blue','green','red',],
            data: [confirmed.value, recovered.value, deaths.value]
        }]}}
            options={{
                legend: {display:false},
                title:{display:true, text:`current state is ${country}`}
            }}/>
        ):null

    );


    return(
       <div className={styles.container}>
           {country ? barChart :LineChart}
       </div>
    )
}

export default Chart;