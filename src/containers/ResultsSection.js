import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import ResultsContext from '../context/ResultsContext';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
                <Container>
                    <h3>Results</h3>
                    <ListGroup variant="flush">
                        {
                            resultData.map((e,i) => {
                                return (
                                    <>
                                        <ListGroup.Item key={i}>{e.Title}
                                            <Button variant="outline-primary">Nominate</Button>
                                        </ListGroup.Item>
                                    </>
                                )
                            })
                        }
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    )
};

export default ResultsSection;