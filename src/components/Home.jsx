// import axios from "axios";
// import { useEffect, useState } from "react";
// import { CiLocationOn } from "react-icons/ci";
// import { IoMdSearch } from "react-icons/io";
// import { WiDaySunny, WiCloud, WiFog, WiSmoke, WiDayCloudy } from "react-icons/wi"; // Import weather icons

// const Home = () => {
//     const [data, setData] = useState({});
//     const [location, setLocation] = useState('');
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         setInterval(() => setTime(new Date()), 1000);
//     }, []);

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d82bf0666e83a91ad672524e21f51165`;

//     const searchLocation = (event) => {
//         if (event.key === "Enter") {
//             axios.get(url).then((response) => {
//                 setData(response.data);
//                 console.log(response.data);
//             });
//         }
//     };

//     const convertKelvinToCelsius = (tempKelvin) => {
//         return (tempKelvin - 273.15).toFixed(2);
//     };

//     // Define a function to map weather conditions to icons
//     const getWeatherIcon = (weatherType) => {
//         switch (weatherType) {
//             case 'Clear':
//                 return <WiDaySunny />;
//             case 'Clouds':
//                 return <WiDayCloudy />;
//             case 'Haze':
//                 return <WiFog />;
//             case 'Smoke':
//                 return <WiSmoke />;
//             default:
//                 return null;
//         }
//     };

//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const currentDay = days[time.getDay()];
//     const currentDate = time.toLocaleDateString();

//     return (
//         <>
//             <div style={{ backgroundColor: '#e9e9e9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ backgroundColor: '#fafafa', padding: '40px', borderRadius: '40px', maxWidth: '800px', width: '80%', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                     <div style={{ display: "flex", alignItems: "center", marginBottom: "60px" }}>
//                         {location ? <CiLocationOn  style={{ marginRight: "5px", color: '#696969' }} /> : null}
//                         <p style={{ color: '#696969' }}>{data.name}</p>
//                         <div style={{ marginLeft: "540px" }}>
//                             <p style={{ color: '#696969',fontSize: '13px' }}>{time.toLocaleTimeString()}</p>
//                             <p style={{ color: '#696969',fontSize: '13px', }}>{currentDate}</p>
//                         </div>
//                     </div>

//                     <div style={{ borderRadius: '20px', padding: '40px', textAlign: "center" }}>
//                         <div style={{ position: 'relative', display: 'inline-block', maxWidth: '300px' }}>
//                             <input
//                                 type="text"
//                                 placeholder="Search Location"
//                                 value={location}
//                                 onChange={(event) => setLocation(event.target.value)}
//                                 onKeyPress={searchLocation}
//                                 style={{
//                                     borderRadius: '20px',
//                                     border: '2px solid #e9e9e9',
//                                     padding: '10px',
//                                     paddingLeft: '40px', // Adjust left padding to accommodate the icon
//                                     width: '100%'
//                                 }}
//                             />
//                             <IoMdSearch style={{
//                                 position: 'absolute',
//                                 left: '15px',
//                                 top: '50%',
//                                 transform: 'translateY(-50%)',
//                                 color: '#ccc',
//                                 pointerEvents: 'none', // Ensure the icon doesn't interfere with input events
//                             }} />

//                         </div>
//                     </div>

//                     <div className='text-center font-medium text-6xl' style={{ color: '#696969' }}>
//     {data.main ? (
//         <>
//             <h1>{convertKelvinToCelsius(data.main.temp)} °C</h1>
//         </>
//     ) : null}   
//     {data.weather && data.weather.length > 0 && 
//         <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <span style={{ fontSize: '0.7em', marginRight: '10px' }}>{getWeatherIcon(data.weather[0].main)}</span>
//             <h1 className="text-3xl font-medium">{data.weather[0].main}</h1>
//         </div>
//     } {/* Display weather icon */}
// </div>



//                     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                         <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
//                             <div>
//                                 {data.main ? <p className="text-center font-semibold " style={{ color: '#696969' }}>{data.main.feels_like} °F</p> : null}
//                                 <p className="text-center " style={{ color: '#696969',fontSize: '14px' }}>Feels Like</p>
//                             </div>
//                             <div>
//                                 {data.main ? <p className="text-center font-semibold" style={{ color: '#696969' }}>{data.main.humidity} %</p> : null}
//                                 <p className="text-center " style={{ color: '#696969',fontSize: '14px'  }}>Humidity</p>
//                             </div>
//                             <div>
//                                 {data.wind ? <p className="text-center font-semibold" style={{ color: '#696969' }}>{data.wind.speed} km/h</p> : null}
//                                 <p className="text-center" style={{ color: '#696969',fontSize: '14px'  }}>Wind Speed</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;




import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { WiDaySunny, WiCloud, WiFog, WiSmoke, WiDayCloudy, WiRain, WiSnow } from "react-icons/wi"; // Import weather icons

const Home = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

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
            case 'Clear':
                return <WiDaySunny />;
            case 'Clouds':
                return <WiDayCloudy />;
            case 'Haze':
                return <WiFog />;
            case 'Smoke':
                return <WiSmoke />;
                case 'Rain':
                return <WiRain />;
                case 'Snow':
                return <WiSnow />;
            default:
                return null;
        }
    };

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[time.getDay()];
    const currentDate = time.toLocaleDateString();

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-full md:max-w-md">
                <div className="flex items-center mb-8">
                    {location ? <CiLocationOn className="mr-2 text-gray-600" /> : null}
                    <p className="text-gray-600">{data.name}</p>
                    <div className="ml-auto">
                        <p className="text-sm text-gray-600">{time.toLocaleTimeString()}</p>
                        <p className="text-sm text-gray-600">{currentDate}</p>
                    </div>
                </div>

                <div className="rounded-full relative inline-block w-full md:max-w-sm">
                    <input
                        type="text"
                        placeholder="Search Location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                    />
                    <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="text-center mt-8">
                    {data.main ? (
                        <h1 className="text-6xl font-medium" style={{ color: '#696969' }}>{convertKelvinToCelsius(data.main.temp)} °C</h1>
                    ) : null}
                    {data.weather && data.weather.length > 0 && (
                        <div className="flex items-center justify-center mt-4" >
                            <span className="text-3xl mr-2" style={{ color: '#696969' }}>{getWeatherIcon(data.weather[0].main)}</span>
                            <h1 className="text-3xl font-medium" style={{ color: '#696969' }}>{data.weather[0].main}</h1>
                        </div>
                    )}
                </div>

                <div className="flex justify-around mt-8">
                    <div>
                        {data.main ? <p className="text-lg font-semibold" style={{ color: '#696969' }}>{data.main.feels_like} °F</p> : null}
                        <p className="text-sm"style={{ color: '#696969' }}>Feels Like</p>
                    </div>
                    <div>
                        {data.main ? <p className="text-lg font-semibold" style={{ color: '#696969' }}>{data.main.humidity} %</p> : null}
                        <p className="text-sm"style={{ color: '#696969' }}>Humidity</p>
                    </div>
                    <div>
                        {data.wind ? <p className="text-lg font-semibold" style={{ color: '#696969' }}>{data.wind.speed} km/h</p> : null}
                        <p className="text-sm" style={{ color: '#696969' }}>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
