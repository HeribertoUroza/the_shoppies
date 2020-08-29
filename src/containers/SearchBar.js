import React, { useState, useContext } from 'react';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

// API CALL
import getAPIdata from '../api/OMDB';

// CONTEXT
import ResultsContext from '../context/ResultsContext';

function SearchBar() {
    const [ query, setQuery ] = useState('');
    let currentResults = useContext(ResultsContext)
    
    function handleChange(e) {
        setQuery(e.target.value)

        if (query.length < 1) return;
        getAPIdata(query)
            .then(res => {
                if(!res.data.Title && !res.data.Year) return;
                currentResults.results.push(`${res.data.Title} (${res.data.Year})`)
            }).catch(error => {
                console.log(error)
            })
    }
    
    return (
        <Jumbotron fluid>
            <Container>
                <h1>The Shoppies</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-bar" onChange={handleChange}/>
                </Form>
            </Container>
        </Jumbotron>
    )
}; 

export default SearchBar;