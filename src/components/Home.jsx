import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import {
    WiDaySunny,
    WiCloud,
    WiFog,
    WiSmoke,
    WiDayCloudy,
    WiRain,
    WiSnow,
} from "react-icons/wi"; // Import weather icons

const Home = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [time, setTime] = useState(new Date());
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d82bf0666e83a91ad672524e21f51165`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
            });
        }
    };

    const convertKelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(2);
    };

    // Define a function to map weather conditions to icons
    const getWeatherIcon = (weatherType) => {
        switch (weatherType) {
            case "Clear":
                return <WiDaySunny />;
            case "Clouds":
                return <WiDayCloudy />;
            case "Haze":
                return <WiFog />;
            case "Smoke":
                return <WiSmoke />;
            case "Rain":
                return <WiRain />;
            case "Snow":
                return <WiSnow />;
            default:
                return null;
        }
    };

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const currentDay = days[time.getDay()];
    const currentDate = time.toLocaleDateString();

    return (
        <div
            className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
                } flex justify-center items-center `}
        >
            <div className="bg-yellow p-8 rounded-xl w-full md:max-w-md border-4 border-gray-300 relative">
                <div className="flex items-center " >
                    {location ? <CiLocationOn className="mr-2 font-bold" /> : null}
                    <p>{data.name}</p>
                    <div className="ml-auto" >   
                        <p className="text-sm">{time.toLocaleTimeString()}</p>
                        <p className="text-sm">{currentDate}</p>
                    </div>
                </div>

                <button
                    className="absolute top-4 left-8 p-1 rounded-full bg-gray-300 text-gray-800 text-xs"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>


                <div className="rounded-full relative inline-block w-full md:max-w-sm mt-10">
                    <input
                    
                        type="text"
                        placeholder="Search Location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
                        style={{color:darkMode?"#ccc":"#696969"}}
                    />
                    <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Weather information display */}
                <div className="text-center mt-8">
                    {/* Temperature */}
                    {data.main ? (
                        <h1
                            className="text-6xl font-medium"
                            style={{ color: darkMode ? "#ccc" : "#696969" }}
                        >
                            {convertKelvinToCelsius(data.main.temp)} °C
                        </h1>
                    ) : null}

                    {/* Weather icon and description */}
                    {data.weather && data.weather.length > 0 && (
                        <div className="flex items-center justify-center mt-4">
                            <span className="text-3xl mr-2" style={{color:darkMode? "#ccc" : "#696969"}}>
                                {getWeatherIcon(data.weather[0].main)}
                            </span>
                            <h1 className="text-4xl" style={{ color: darkMode ? "#ccc" : "#696969" }}>
                                {data.weather[0].main}
                            </h1>
                        </div>
                    )}
                </div>

                {/* Additional weather information */}
                <div className="flex justify-around mt-8">
                    <div>
                        {data.main ? (
                            <p style={{ color: darkMode ? "#ccc" : "#696969" }}>
                                {data.main.feels_like} °F
                            </p>
                        ) : null}
                        <p style={{ color: darkMode ? "#ccc" : "#696969" }}>Feels Like</p>
                    </div>
                    <div>
                        {data.main ? (
                            <p style={{ color: darkMode ? "#ccc" : "#696969" }}>
                                {data.main.humidity} %
                            </p>
                        ) : null}
                        <p style={{ color: darkMode ? "#ccc" : "#696969" }}>Humidity</p>
                    </div>
                    <div>
                        {data.wind ? (
                            <p style={{ color: darkMode ? "#ccc" : "#696969" }}>
                                {data.wind.speed} km/h
                            </p>
                        ) : null}
                        <p style={{ color: darkMode ? "#ccc" : "#696969" }}>Wind Speed</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
