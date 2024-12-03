import React, {useState, useEffect} from 'react'
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from "./components/BasicTable.jsx";
import './app.css';


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        try {
            fetch('/people')
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    console.log(data);
                    for(const character of data) {
                        console.log(character.name)
                    }
                });

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <BasicTable data={data}/>
    )
}

createRoot(document.getElementById('app')).render(<App/>);
export default App;

