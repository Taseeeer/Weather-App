import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

    const [information, setInformation] = useState("");
    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    
    useEffect(() => {
        
        const api = "4cbfd5a27ff343789d1124736202110";
        const url = "http://api.weatherapi.com/v1/current.json?key=4cbfd5a27ff343789d1124736202110&q=Peshawar";
        
        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.location);
            setInformation(result.location);
            
            setLoading(false);
        });

        fetch(url)
        .then(response => response.json())
        .then(result => {
                setWeather(result.current.condition);
            });
            
        }, []);
        

        const getInput = (e) => {
            //console.log(e.target.value);
            setInput(e.target.value);
        };
        
    const citySearch = () => {
        
        const url = `http://api.weatherapi.com/v1/current.json?key=4cbfd5a27ff343789d1124736202110&q=${input}`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setWeather(result.current.condition);
            });


        fetch(url)
        .then(response => response.json())
        .then(result => {
                setWeather(result.current.condition);
            });
            
        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.location);
            setInformation(result.location);
            
            setLoading(false);
        });
    }

    const { country, name, region, localtime } = information;

    return (
        <div style={{fontFamily: "monospace", color: "darkslateblue", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
            <input placeholder="city" onChange={getInput}/>
            <button onClick={citySearch} style={{border: "none", padding: ".3rem 1rem", color: "white", backgroundColor: "darkviolet", cursor: "pointer", margin: ".2rem 0"}}>
                City
            </button>
            <h1 style={{fontFamily: "monospace", color: "white", background: "orange", display: "inline", padding: ".4rem"}}>
                {country}
            </h1>
            <h2>
                {name}
            </h2>
            <h2>{region}</h2>
            <h3>{localtime}</h3>
            <h1>{weather.text}</h1>
            <img src={weather.icon} style={{width: "100px", height: "100px"}}/>
            {
                 loading ? <div className="loader"></div>
 
                : null
            }
        </div>
    );
};

export default App;