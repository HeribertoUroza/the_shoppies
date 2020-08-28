import React, { useContext, } from 'react';

import ResultContext from '../context/ResultsContext';


function ResultsSection() {
    //let [ resultData, getResultData ] = useState([])
    let currentResults = useContext(ResultContext)

    function getContextData(){

        return currentResults.results.map((e, i) => {
            console.log(e)
            return <h4>{e}</h4>
        })
    };

    //getResultData(currentResults.results)
    // console.log('CR',currentResults.results)
    // console.log('results',results)
    return (
        <>
            Results
            {
                getContextData()
            }
        </>
    )
};

export default ResultsSection;