import React, {useState, useEffect} from 'react'
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from "./components/BasicTable.jsx";
import './app.css';


function App() {
    const [data, setData] = useState([]);

    useEffect(fetchData, [])

    const fetchData = () => {
        try {
            fetch('/people')
                .then(response => response.json())
                .then(data => {
                    // set your data here once you're happy for it to pass to the table
                    setData(data);
                });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <BasicTable/>
    )
}

createRoot(document.getElementById('app')).render(<App/>);
export default App;

