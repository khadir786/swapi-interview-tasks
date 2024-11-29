import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from "./components/BasicTable.jsx";
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        // You can use this.state.data to access your data from your state
        return (<BasicTable/>)
    }

    fetchData = () =>  {
        fetch('/people')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    // set your data here once you're happy for it to pass to the table
                });
            });
    }
}


createRoot(document.getElementById('app')).render(<App/>);