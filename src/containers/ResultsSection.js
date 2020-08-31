import React, { useState, useContext, useEffect } from 'react';
import ResultsContext from '../context/ResultsContext';


function ResultsSection() {
    let [ resultData, getResultData ] = useState([])
    // getResultData(ResultsContext.results)
    // console.log(resultData)
    let currentResults = useContext(ResultsContext)
    

    useEffect(() => {
        console.log(currentResults)
        getResultData(currentResults)
    }, [currentResults])

    return (
        <>
            Results
            {/* <ResultsContext.Consumer>
                {
                    ({results})=> {
                        if(results.length){
                            results.map((e, i) => {
                                console.log(e)
                                return <h3>{e}</h3>
                            })
                        } else {
                            return ""
                        }
                    }
                }
            </ResultsContext.Consumer> */}
            {
               
                resultData.map((e, i) => {
                    return <h3>{e.Title}</h3>
                })
            }
        </>
    )
};

export default ResultsSection;