import react from 'react'
import axios from 'axios';


const url = "https://covid19.mathdro.id/api"

//const url = ("https://api.thevirustracker.com/free-api?global=stats")
//const url = ("https://api.covid19api.com/summary")        ${url}/daily



export const fetchData = async() => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get("https://covid19.mathdro.id/api");
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
        const { data }= await axios.get(`https://covid19.mathdro.id/api/daily`);

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
        const {data:{countries}} = await axios.get(`https://covid19.mathdro.id/api/countries`);
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log("something wrong")
    }
  
}


