import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import ResultsContext from '../context/ResultsContext';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function ResultsSection(props) {
    let [ resultData, getResultData ] = useState([]);
    let currentResults = useContext(ResultsContext)
    
    const handleNomination=(e)=>{
        let selected = e.target.getAttribute('data-key');
        props.nominate(selected, e)
    }

    useEffect(() => {
        getResultData(currentResults)
    }, [currentResults])

    return (
        <>
            <Jumbotron fluid className='results-container' >
                <Container>
                    <h3>Results</h3>
                    <ListGroup variant="flush">
                        {
                            resultData.length !== 0 ? resultData.map((e,i) => {
                                return (
                                    
                                    <ListGroup.Item key={i}>{e.Title}, ({e.Year})
                                        <Button data-key={`${e.Title}, (${e.Year})`} variant="outline-primary" onClick={handleNomination}>Nominate</Button>
                                    </ListGroup.Item>
                                    
                                )
                            }) : 
                                <ListGroup.Item>Search Above To Nominate Your Favorite Movie!</ListGroup.Item>
                        }
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    )
};

export default ResultsSection;