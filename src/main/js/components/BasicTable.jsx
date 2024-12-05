import React from "react";
import {Container, Table} from "reactstrap";

function BasicTable({data, handleDeleteCharacter, wookieMode, wookieData}) {
    // feed your data here, and build your table around that data
    return <Container fluid>
        {!wookieMode ? (<Table className="mt-4">
            <thead>
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair Colour</th>
                <th>Birth Year</th>
            </tr>
            </thead>

            <tbody>
            {data.map((character, index) => (
                <tr key={index}>
                    <td>{character.name}</td>
                    <td>{character.height}</td>
                    <td>{character.mass}</td>
                    <td>{character.hair_color}</td>
                    <td>{character.birth_year}</td>
                    <td>
                        <button type='button'
                                className="btn btn-primary btn-sm"
                                onClick={() => handleDeleteCharacter(character)}
                        >Delete
                        </button>
                    </td>
                </tr>

            ))}
            </tbody>
        </Table>) : (<Table className="mt-4">
            <thead>
            <tr>
                <th>Whrascwo</th>
                <th>Acwoahrracao</th>
                <th>Scracc</th>
                <th>Acraahrc Oaooanoorc	</th>
                <th>Rhahrcaoac Roworarc	</th>
            </tr>
            </thead>

            <tbody>
            {wookieData.map((character, index) => (
                <tr key={index}>
                    {/*the properties are in wookie...*/}
                    <td>{character.whrascwo}</td>
                    <td>{character.acwoahrracao}</td>
                    <td>{character.scracc}</td>
                    <td>{character.acraahrc_oaooanoorc}</td>
                    <td>{character.rhahrcaoac_roworarc}</td>
                    <td>
                        <button type='button'
                                className="btn btn-primary btn-sm"
                                onClick={() => handleDeleteCharacter(character)}
                        >Delete
                        </button>
                    </td>
                </tr>

            ))}
            </tbody>
        </Table>)}

    </Container>
}

export default BasicTable