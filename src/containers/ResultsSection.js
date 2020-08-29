import React, { useContext, useState, useEffect } from 'react';
import ResultsContext from '../context/ResultsContext';


function ResultsSection() {
    // let [ resultData, getResultData ] = useState([])

    
    //getResultData(currentResults.results)
    
    

    return (
        <>
            Results
            <ResultsContext.Consumer>
                {
                    ({results})=> {
                        console.log(results)
                        results.map((e,i) => {
                            return <h3>{e}</h3>
                        })
                    }
                }
            </ResultsContext.Consumer>
            {/* {
                for(let currentResults in props){
                    console.log(currentResults)
                }
            } */}
            
        </>
    )
};

export default ResultsSection;