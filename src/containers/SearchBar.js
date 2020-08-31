import React, { useState, useContext } from 'react';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


// CONTEXT
import ResultsContext from '../context/ResultsContext';

function SearchBar(props) {
    const [ query, setQuery ] = useState('')
    function handleChange(e){
        setQuery(e.target.value)
        props.apiCall(e.target.value)
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