import {useState} from "react";

const LocalTime = () =>{
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000)

    return <p>Brisbane time: {time}</p>
}
export default LocalTime