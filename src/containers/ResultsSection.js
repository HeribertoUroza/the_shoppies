import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import ResultsContext from '../context/ResultsContext';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function ResultsSection() {
    let [ resultData, getResultData ] = useState([])
    let currentResults = useContext(ResultsContext)
    

    useEffect(() => {
        getResultData(currentResults)
    }, [currentResults])

    return (
        <>
            {/* Results
            {
                resultData.map((e, i) => {
                    return <h3>{e.Title}</h3>
                })
            } */}
            <Jumbotron fluid>
                <h3>Results</h3>
                <Container>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    )
};

export default ResultsSection;