import React, { useState, useEffect, useContext } from 'react';

// CONTAINERS

// CONTEXT
import NomiContext from '../context/NomiContext';


function NomiSection(props){
    let [ currNomiData, getNomiData ] = useState([]);
    let currentNominations = useContext(NomiContext);

    useEffect(()=>{
        getNomiData(currentNominations)
        console.log(currentNominations)
    }, [currentNominations])

    return (
        <>
            <h3>Nominations</h3>
        {
            currNomiData.map((e, i) => {
                return <h3>{e}</h3>
            })
        }
        </>
    )
}

export default NomiSection;