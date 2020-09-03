import React, { useState, useEffect, useContext } from 'react';

// CONTAINERS

// CONTEXT
import NomiContext from '../context/NomiContext';

// BOOTSTRAP IMPORTS
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function NomiSection(props){
    let [ currNomiData, getNomiData ] = useState([]);
    let currentNominations = useContext(NomiContext);

    useEffect(()=>{
        getNomiData(currentNominations)
    }, [currentNominations])

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h3>Nominations</h3>
                    <ListGroup variant='flush'>
                        {
                            currNomiData.length === 0 ? <ListGroup.Item>No Nominations Selected</ListGroup.Item>
                                : currNomiData.map((e, i) => {
                                    return (
                                        <ListGroup.Item key={i}>{e}
                                            <Button variant="outline-primary" >Remove</Button>
                                        </ListGroup.Item>
                                    )
                                })
                        }            
                    </ListGroup>
                    <Button onClick={props.closeBtn} className='close-button'>Close</Button>
                </Container>
            </Jumbotron>
        </>
    )
}

export default NomiSection;