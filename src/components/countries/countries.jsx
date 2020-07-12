import React from 'react'
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api/api';
import {useState, useEffect} from 'react';

const Countries = ({countryChangeHandle}) => {
    const [getFectchCountries, setFetchCountries] = useState([])
    useEffect(() => {
        const fetchApi = async () =>{
            setFetchCountries(await fetchCountries());
        }
        fetchApi();
    },[setFetchCountries]);

    console.log(getFectchCountries)
    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>countryChangeHandle(e.target.value)}>
                <option value = "global">Global</option>
    {getFectchCountries.map((country, i)=><option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countries;