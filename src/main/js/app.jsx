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
    const [isNoResults, setIsNoResults] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchResults, setSearchResults] = useState("");


    useEffect(() => {
        fetchData()
    }, [])

    // fetches data for the table when page is loaded
    const fetchData = () => {
        fetch('/people')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                setIsLoading(false);
                for (const character of data) {
                    console.log(character.name);
                }
            })
            .catch(error => console.log(error));
    }

    //
    const searchCharacter = () => {
        if (currentCharacterName.trim() === "") {
            console.log("nothing in here man")
            setIsSearchLoading(prevState => !prevState);
            setIsNoResults(true);
            return;
        }
        fetch(`/person/?name=${currentCharacterName}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch character data.');
                }
                return response.json();
            })
            .then((data) => {
                setCharacterData(data);
                setSearchResults(data.results);
                setIsSearchLoading(false);
                setIsNoResults(data.results.length === 0);
            })
            .catch((error) => {
                console.error(error);
                setIsSearchLoading(false);
            });

    }

    const handleSearch = () => {
        setIsSearchLoading(true);
        searchCharacter();
    }

    const handleAddCharacter = (character) => {
        // check if the character is already in the table
        if (data.some((item) => item.name === character.name)) {
            console.log("Character already exists in the table.");
            return;
        }
        // extract ID from URL to send to backend
        const urlSplit = character.url.split("/");
        const id = urlSplit[urlSplit.length - 2];

        // add character to backend list and update state
        fetch(`/people/add/${id}`, {
            method: "POST",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add character to the backend.");
                }
                console.log(`${character.name} has been added to the backend.`);
                // add the character to the frontend table
                setData((prevData) => [...prevData, character]);
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleDeleteCharacter = (character) => {
        const urlSplit = character.url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        fetch(`/person/delete/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete character from the backend.");
                }
                console.log(`Character with ID ${id} has been deleted from the backend`);
                setData((prevData) => prevData.filter((item) => item.name !== character.name));
            })
            .catch((error) => console.log("Error:", error));
    };

    return (
        <div className="App">
            {isLoading ? <LoadingIcon center={true}/> : <Container fluid>
                <BasicTable data={data} handleDeleteCharacter={handleDeleteCharacter} />
                <div className="SearchArea">
                    <div className="SearchBox">
                        <form onSubmit={(e) => e.preventDefault()}>
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
                        {isSearchLoading ? <LoadingIcon /> : characterData.count > 0 ? (
                            <div className="Results">
                                <p>Found {characterData.count} results:</p>
                                <ul>
                                    {searchResults.map((character, index) => (
                                        <div className="ResultSet">
                                            <li key={index}>{character.name}</li>
                                            <button type="button" className="btn btn-primary btn-sm"
                                                    onClick={() => handleAddCharacter(character)}>Add
                                            </button>

                                        </div>

                                    ))}
                                </ul>
                            </div>
                        ) : (isNoResults && <p>No results</p>)
                        }
                    </div>
                </div>
            </Container>}
        </div>
    );
}

createRoot(document.getElementById('app')).render(<App/>);
export default App;

