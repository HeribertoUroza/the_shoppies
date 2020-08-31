import React, { useState, useContext, useEffect } from 'react';
import ResultsContext from '../context/ResultsContext';


function ResultsSection() {
    let [ resultData, getResultData ] = useState([])
    let currentResults = useContext(ResultsContext)
    

    useEffect(() => {
        getResultData(currentResults)
    }, [currentResults])

    return (
        <>
            Results
            {
                resultData.map((e, i) => {
                    return <h3>{e.Title}</h3>
                })
            }
        </>
    )
};

export default ResultsSection;