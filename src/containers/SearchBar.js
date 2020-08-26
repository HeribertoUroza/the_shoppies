import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>The Shoppies</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-bar" />
                    <Button variant="outline-primary search-btn">Search</Button>
                </Form>
            </Container>
        </Jumbotron>
    )
};

export default SearchBar;