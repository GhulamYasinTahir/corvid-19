import React from 'react'
import Cards from './components/cards/cards'
import Countries from './components/countries/countries'
import Charts from './components/charts/charts'
import styles from './App.module.css'
import { fetchData } from './api/api';



class App extends React.Component{
    state = {
        data: {},
        country:'',
    }
    async componentDidMount() {

        

        const fetch = await fetchData();
        this.setState({data: fetch});
    }
    countryChangeHandle = async (country)=>{
        const fetch = await fetchData(country);
        this.setState({data: fetch, country:country});

        console.log(country)
    }


    render() {
        const {data, country} = this.state;
        return(
            <div className={styles.container}>  
                
                <Cards data={data} />
                <Countries countryChangeHandle={this.countryChangeHandle} />
                <Charts data={data} country={country}/>
                
            </div>
        )
    }
    
}
export default App;
