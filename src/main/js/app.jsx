import React, {useState, useEffect} from 'react'
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from "./components/BasicTable.jsx";
import './app.css';
import {Container} from "reactstrap";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                    setIsLoading(false);
                    for (const character of data) {
                        console.log(character.name)
                    }
                });

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="App">
            {
                isLoading ?
                    <div className="loading" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <div className="spinner-border" role="status">
                            {/*<span className="sr-only">Loading</span>*/}
                        </div>
                    </div> :

                    <Container fluid>
                        <BasicTable data={data}/>

                    </Container>
            }
        </div>


    )
}

createRoot(document.getElementById('app')).render(<App/>);
export default App;

