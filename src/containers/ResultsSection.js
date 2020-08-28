import React, { useContext, useState, useEffect } from 'react';
import currentResults from '../context/ResultsContext';


function ResultsSection() {
    // let [ resultData, getResultData ] = useState([])

    
    //getResultData(currentResults.results)
    // console.log('CR',currentResults.results)
    useEffect( _=> {
        console.log('results', currentResults)

    })

    return (
        <>
            Results
            {/* {
                for(let currentResults in props){
                    console.log(currentResults)
                }
            } */}
            
        </>
    )
};

export default ResultsSection;