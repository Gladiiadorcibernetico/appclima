import React from 'react';
import {  Section} from '../styles/MinAMin.js'


const dataSearch = () => {

    const dataHHH = JSON.parse(localStorage.getItem('ClimaHH' ));
    console.log(dataHHH)

    return (
        <Section>   <h1>{dataHHH.timezone}     {Math.round( 9/5*[Number(dataHHH.hourly[0].temp)-273]+32)}ºF     {dataHHH.hourly[0].weather[0].description} </h1>
        </Section>
 
    );
};

export default dataSearch;