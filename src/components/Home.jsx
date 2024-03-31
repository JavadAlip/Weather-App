import axios from "axios";
import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import logo from '../assets/removebg-11.png'

const Home = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d82bf0666e83a91ad672524e21f51165`

    // search implement
    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((Response) => {
                setData(Response.data)
                console.log(Response.data);
            })
        }
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[time.getDay()];
    const currentDate = time.toLocaleDateString();

    return (
        <>
            <div style={{ backgroundColor: '#e9e9e9', minHeight: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#fafafa', padding: '40px', borderRadius: '40px', maxWidth: '800px', width: '80%', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "60px" }}>
                        {location ? <MdMyLocation style={{ marginRight: "5px", color: '#696969' }} /> : null}
                        <p style={{ color: '#696969' }}>{data.name}</p>
                        <div style={{ marginLeft: "540px" }}>
                            <p style={{ color: '#696969',fontSize: '13px' }}>{time.toLocaleTimeString()}</p>
                            <p style={{ color: '#696969',fontSize: '13px', }}>{currentDate}</p>
                        </div>
                    </div>



                    <div style={{ borderRadius: '20px', padding: '40px', textAlign: "center" }}>
                        <div style={{ position: 'relative', display: 'inline-block', maxWidth: '300px' }}>
                            <input
                                type="text"
                                placeholder="Search Location"
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                                onKeyPress={searchLocation}
                                style={{
                                    borderRadius: '20px',
                                    border: '2px solid #e9e9e9',
                                    padding: '10px',
                                    paddingLeft: '40px', // Adjust left padding to accommodate the icon
                                    width: '100%'
                                }}
                            />
                            <IoMdSearch style={{
                                position: 'absolute',
                                left: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#ccc',
                                pointerEvents: 'none', // Ensure the icon doesn't interfere with input events
                            }} />

                        </div>
                    </div>

                    <div className='text-center font-medium text-6xl' style={{ color: '#696969' }}>
                        {data.main ? <h1>{data.main.temp} °F</h1> : null}
                    </div>

                    <div style={{ marginTop: '2px', color: '#696969', textAlign: "center" }}>
                        {data.weather ? <h1 className="text-3xl font-medium">{data.weather[0].main}</h1> : null}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                            <div>
                                {data.main ? <p className="text-center font-semibold " style={{ color: '#696969' }}>{data.main.feels_like} °F</p> : null}
                                <p className="text-center " style={{ color: '#696969',fontSize: '14px' }}>Feels Like</p>
                            </div>
                            <div>
                                {data.main ? <p className="text-center font-semibold" style={{ color: '#696969' }}>{data.main.humidity} %</p> : null}
                                <p className="text-center " style={{ color: '#696969',fontSize: '14px'  }}>Humidity</p>
                            </div>
                            <div>
                                {data.wind ? <p className="text-center font-semibold" style={{ color: '#696969' }}>{data.wind.speed} km/h</p> : null}
                                <p className="text-center" style={{ color: '#696969',fontSize: '14px'  }}>Wind Speed</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
