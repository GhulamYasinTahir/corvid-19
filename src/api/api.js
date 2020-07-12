import react from 'react'
import axios from 'axios';


const url = "https://covid19.mathdro.id/api"

//const url = ("https://api.thevirustracker.com/free-api?global=stats")
//const url = ("https://api.covid19api.com/summary")        ${url}/daily



export const fetchData = async(country) => {

    let urlChagee = url;
    if(country){
        urlChagee = `${url}/countries/${country}`;

    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(urlChagee);
        const modified = {
            confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate,
        } 
        return modified;
    } catch (error) {

    }
}

export const fetchDailyData = async () =>{
    try {
        const { data }= await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        })); 
        return modifiedData;

    } catch (error) {
        
    }
}

export const fetchCountries = async ()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log("something wrong")
    }
  
}


