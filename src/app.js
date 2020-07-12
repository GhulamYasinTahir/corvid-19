import React from 'react'
import Cards from './components/cards/cards'
import Countries from './components/countries/countries'
import Charts from './components/charts/charts'
import styles from './App.module.css'
import { fetchData } from './api/api';

class App extends React.Component{
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetch = await fetchData();
        this.setState({data: fetch});
    }

    render() {
        const {data} = this.state;
        return(
            <div className={styles.container}>  
                
                <Cards data={data} />
                <Countries />
                <Charts />
            </div>
        )
    }
    
}
export default App;
