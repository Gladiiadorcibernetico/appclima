import React , { useEffect, useState }from 'react';
import axios from 'axios'

const Data = () => {



    const [dataClima,setDataClima] = useState([])
    const lon = 98
    const lat = 34
   
    const urlActual = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=264b14d31e2fd9f1fb7676d7c6eee1c1`
    

    useEffect(() => {

         axios.get(urlActual)
         .then(response => {
          
           setDataClima(response)
        
         })
         .catch(e => {
             if (e.response){}else if(e.request){}else if(e.message){}})
         }, []);

         console.log(dataClima)

    return (
        <div>
            "hi"
        </div>
    );
};

export default Data;