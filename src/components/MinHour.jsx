import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Div6,Div7} from '../styles/HourXHour.js';
import '../styles/Mins.css';

const MinHour = () => {


        
const lon = 98
const lat = 34

    // const [climaHour,setClimaHour] = useState()
    // // const urlActual = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`
    // const urlActual = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`
    

    // useEffect(() => {

    //     axios.get(urlActual)
    //     .then(response => {
    //        const clima = response.data;
    //        setClimaHour(clima)
    //     //    console.log(clima)
    //     //    localStorage.setItem('ClimaNew', JSON.stringify(clima) );
    //     })
    //     .catch(e => {
    //         if (e.response){}else if(e.request){}else if(e.message){}})
    //     }, []);

        
        const dataMH = JSON.parse(localStorage.getItem('ClimaNew' ));
  
    
       

        const {minutely} = dataMH


 
    return (
       <Div7>   Precipitacion por minuto, para los proximos 60 minutos
             <Div6>
             
         {dataMH.minutely.map(({precipitation}) => ( <div><div className= ""></div><div className='separacion'></div> <div className='hour'>{precipitation } </div>  <h5 className='temp' >{precipitation}º   </h5></div> ))}
         

        </Div6 >
       </Div7>
    );
};

export default MinHour;

