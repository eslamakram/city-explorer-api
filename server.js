"use strict"


const express = require('express');
const app = express();
const cors = require('cors');
// const { request, response } = require('express');
app.use(cors());
require('dotenv').config();
const weatherData = require('./data/weather.json')

const PORT = process.env.PORT;

// API endpoint
app.get('/weather', (req,res)=>{
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
    let searchQuery;

    if( lat && lon  ){
        searchQuery = weatherData.find(item =>{
         if( lat === item.lat &&
             lon === item.lon 
            ){
                 return item;
             } });

            // res.send('hello!')
           
           let forecastDays = searchQuery.data.map(day =>{

            return new Forecast(day);
            
        });
  
     res.status(200).json(forecastDays); 
      
     } else{
    res.status(500).send('invalid entry!');
}

});

class Forecast{
    constructor(day){
        this.date = day.valid_date;
        this.description = day.weather.description;
    }
}


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)

});