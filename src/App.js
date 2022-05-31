import { useEffect, useState } from "react";
import LocalTime from "./components/LocalTime";
import Form from "./components/Form";
// import List from "./components/List";
import Table from "./components/Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const fetchItems = async () =>{
      try {
        //in serious project we should check if the response is ok, then catch error and setItems
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json();
        setItems(data);
      }catch (err){
         console.log(err)
      }
    }
    fetchItems()
  }, [reqType])
  return (
    <>
      <LocalTime />
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items = {items} /> */}
      <Table items = {items} />
    </>
 
  );
}

export default App;
