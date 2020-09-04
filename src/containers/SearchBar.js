import React from 'react';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


function SearchBar(props) {

    function handleChange(e){
        props.apiCall(e.target.value)
    }
    
    return (
        <Jumbotron fluid className='search-container'>
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