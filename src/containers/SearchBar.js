import React, { useState } from 'react';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// API CALL
import getAPIdata from '../api/OMDB';


function SearchBar() {
    const [query, setQuery ] = useState('');

    function handleChange(e) {
        setQuery(e.target.value)
        getAPIdata(query)
    }

    return (
        <Jumbotron fluid>
            <Container>
                <h1>The Shoppies</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-bar" onChange={handleChange}/>
                    <Button variant="outline-primary search-btn">Search</Button>
                </Form>
            </Container>
        </Jumbotron>
    )
}; 

export default SearchBar;