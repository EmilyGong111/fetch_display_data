import { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000)
  return (
    <div >
    {time}
    </div>
  );
}

export default App;
