import React, { useState, useContext } from 'react';
import ResultsContext from '../context/ResultsContext';


function ResultsSection() {
    let [ resultData, getResultData ] = useState([])
    // getResultData(ResultsContext.results)
    // console.log(resultData)
    

    return (
        <>
            Results
            <ResultsContext.Consumer>
                {
                    ({results})=> {
                        getResultData(results)
                        if(resultData.length){
                            resultData.map((e, i) => {
                                return <h3>{e}</h3>
                            })
                        } else {
                            return ""
                        }
                    }
                }
            </ResultsContext.Consumer>
        </>
    )
};

export default ResultsSection;