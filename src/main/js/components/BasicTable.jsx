import React from "react";
import {Container, Table} from "reactstrap";

function BasicTable() {
    // feed your data here, and build your table around that data
    return (<Container fluid>
        <Table className="mt-4">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
    </Container>)
}

export default BasicTable