import React, {useState, useEffect} from 'react'
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from "./components/BasicTable.jsx";
import './app.css';
import {Button, Container} from "reactstrap";
import LoadingIcon from "./components/LoadingIcon.jsx";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [currentCharacterName, setCurrentCharacterName] = useState("");
    const [characterData, setCharacterData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchResults, setSearchResults] = useState("");

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
                        console.log(character.name);
                    }
                });

        } catch (error) {
            console.log(error);
        }
    }

    const searchCharacter = () => {
        if (currentCharacterName.trim() === "") {
            console.log("nothing in here man")
            setIsSearchLoading(prevState => !prevState);
            setIsError(true);
            return;
        }
        try {
            fetch(`/person/?name=${currentCharacterName}`)
                .then(response => response.json())
                .then(data => {
                    setCharacterData(data);
                    setSearchResults(data.results)
                    console.log(data);
                    setIsSearchLoading(false);
                })

        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = () => {
        setIsSearchLoading(true);
        searchCharacter();
    }

    return (
        <div className="App">
            {isLoading ? <LoadingIcon center={true}/> : <Container fluid>
                <BasicTable data={data}/>
                <div className="SearchArea">
                    <div className="SearchBox">
                        <form>
                            <input
                                type="text"
                                placeholder="Character Name"
                                name="characterName"
                                onChange={(e) => setCurrentCharacterName(e.target.value)}
                            />
                        </form>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className="ResultsArea">
                        {isSearchLoading ? <LoadingIcon/> : characterData.count > 0 ? (
                            <div className="Results">
                                <p>Found {characterData.count} results</p>
                                <ul>
                                    {searchResults.map((character, index) => (
                                        <li key={index}>{character.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (isError && <p>No results</p>)
                        }
                    </div>
                </div>
            </Container>}
        </div>
    );
}

createRoot(document.getElementById('app')).render(<App/>);
export default App;

