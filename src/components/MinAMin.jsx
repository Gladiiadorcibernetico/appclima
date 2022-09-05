import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NAVBAR, Button, Section,Div2} from '../styles/MinAMin.js'



const MinAMin = () => {

const lon = 58
const lat = 34

const [dataActual,setDataActual] = useState()
// const url2 =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`;


    useEffect(() => {

        const consultaApi = async()=>{
            const consulta = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`)
            console.log(consulta)
            setDataActual(consulta)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
     consultaApi();   
    }, [ setDataActual]);

      console.log(dataActual)
      
    const{ main, name, visibility,wind,weather} = dataActual;
  console.log(main,name,main.humidity, visibility, main.pressure,wind.speed,weather[0].id )
 
    return (
        <div>
            <NAVBAR>
                <Button>Clima por hora</Button>
                <Button>Clima diario</Button>
                <Button>Contactenos</Button>
            </NAVBAR>

            <Section>   <h1>{name}  {main.temp}º {weather[0].description} </h1>
 </Section>

  <Div2>  

    
            <Section>
              
                <h3>Wind: {wind.speed}</h3>
                <h3>Humidity: {main.humidity}%</h3>
                <h3>Visibility: {visibility} </h3>
                <h3> Pressure: {main.pressure} mb </h3>
             
            </Section>

            
</Div2>
         
        </div>
    );
};

export default MinAMin;