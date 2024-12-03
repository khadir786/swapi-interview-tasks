import React from "react";
import {Container, Table} from "reactstrap";

function BasicTable({data}) {
    // feed your data here, and build your table around that data
    return <Container fluid>
        <Table className="mt-4">
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
                </tr>

            ))}
            </tbody>
        </Table>
    </Container>
}

export default BasicTable