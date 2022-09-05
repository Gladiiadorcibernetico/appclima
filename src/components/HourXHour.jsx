import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Div4, Button, Div2} from '../styles/HourXHour.js'
import '../styles/Hours.css';
import {app} from "../fb";

const HourXHour = () => {

const image = `data:image/jpeg;base64,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`
const image2 = `https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg`
const lon = 98
const lat = 34

    const [climaHour,setClimaHour] = useState()
    const urlActual = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`

   
    // useEffect( () => {
        
    //      axios
    //      .get( urlActual )
    //      .then((res)=>{
    //         setClimaHour(res.data);
    //         localStorage.setItem('ClimaHH', JSON.stringify(climaHour) );
          
    //      })
     
        
    //   },[setClimaHour])

      const dataHHH = JSON.parse(localStorage.getItem('ClimaHH' ));
      console.log(dataHHH.hourly[0].weather[0].main)
  
  
        // var data = 1662174000;
        // var date = new Date(data * 1000).toISOString();
        // console.log(date)
 
    const{ weather} = dataHHH


    const cerrarSesion =  () =>{
            app.auth().signOut();
    }
    return (

<div>
        <Div4>
         {dataHHH.hourly.map(({weather,dt,temp}) => ( 
         <div key={dt}>
            <div className= {weather[0].description}>
        </div>
        <div className='separacion'>
        </div> 
        <div className='hour'>{new Date(dt*1000).getUTCHours() } </div>
        <h5 className=''  >{Math.round( 9/5*[Number(temp)-273]+32)}ºF   </h5></div> ))}

        </Div4 >
                    <button onClick={cerrarSesion}>Cerrar sesion</button>

        <br />
            <div>
                <h2>Registate para recibir alertas del clima personalizadas sobre tu ciudad</h2>
            </div>
            <Div2>
                <Button>Sing up</Button>
                <Button>Register</Button>
            </Div2>
<br />
<br />
<br />
<br />
<br />

        </div>
 )
          
};
export default HourXHour