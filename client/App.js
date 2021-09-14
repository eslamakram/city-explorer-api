import React, { Component } from 'react'
import Weather from './component/Weather';
import axios from 'axios';

 class App extends Component {

        constructor(props){
            super(props);
            this.state={
                city_name:'',
                date : '',
                description : ''
            }
        }
         getData(){
        let config={
            method:"GET",
            baseURL:`http://localhost:8000/weather?lat=48.86&lon=2.35&searchQuery=pARIS`,
          }

          axios(config).then( res =>{
           
             forecastDay = res.map(day =>{
                this.setState({
                    date: day.date,
                    description: day.description
                });
                <Weather date={this.state.date} description={this.state.description}/>

            });

          });
    
        }
    render() {
        return (
            <div>
                getData() 
            </div>
        )
    }
}

export default App
