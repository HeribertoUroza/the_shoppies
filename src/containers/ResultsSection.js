import React, { useContext, useEffect, useState } from 'react';

import ResultContext from '../context/ResultsContext';


function ResultsSection() {
    // let [ resultData, getResultData ] = useState([])
    let currentResults = useContext(ResultContext)
    console.log(currentResults)
    // useEffect(() => {
        
    // })

    return(
        <>
            {
                currentResults.results ? currentResults.results.map((e,i)=> {
                    return <h4>{e}</h4>
                }): ''
            }
        </>
    )
};

export default ResultsSection;