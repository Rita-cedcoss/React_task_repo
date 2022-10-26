import React, { useEffect, useRef, useState } from 'react'

const Component1 = () => {
      var inpWeather=useRef();
      const [weatherInfo,setWeatherinfo]=useState("");
       const searchTemp=(e)=>{
        e.preventDefault();
       let inpval=inpWeather.current.value;
        // inpval.focus();
           fetch("https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location="+inpval)
           .then(result=>{result.json()
            .then(res=>{ console.log(res);
                setWeatherinfo(res);
            })
        })
           console.log(weatherInfo);
       }
    useEffect(()=>
    {
        inpWeather.current.focus(); 
    },[])
    
    if(weatherInfo==="")
    {
    return (
    <div id='outer'>
        <form onSubmit={searchTemp}>
        <input ref={inpWeather}   type="text"/>
        </form>
    </div>
  )
    }
    else
    {
        console.log(weatherInfo)
        return (
            <div id='outer'>
                <form onSubmit={searchTemp}>
                <input ref={inpWeather}  type="text"/>
                </form>
                <h1>{weatherInfo.location.name},{weatherInfo.location.country}</h1>
                <p>{weatherInfo.location.localtime}</p>
                <div id="temperature">{weatherInfo.current.temp_c}°C</div>
                <p><img alt='' src={weatherInfo.current.condition.icon}></img></p>
                <h2>{weatherInfo.current.condition.text}</h2>
            </div>
          ) 
    }
}

export default Component1