import React from "react";
import {Container, Table} from "reactstrap";

class BasicTable extends React.Component {
    // feed your data here, and build your table around that data
    render() {
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
}

export default BasicTable