import React, { useState } from 'react';

// CONTAINERS
import SearchBar from './containers/SearchBar';
import ResultsSection from './containers/ResultsSection';
import NomiSection from './containers/NomiSection';

// CONTEXT
import ResultsContext from './context/ResultsContext';
import NomiContext from './context/NomiContext';

// API CALL
import getAPIdata from './api/OMDB';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  const [ results, getResults ] = useState([]);
  const [ preResults, setPreResults] = useState([]);
  const [ nomiData, getNomiData ] = useState([]);

  const apiCall = async (query) => {  
    const apiSearchRes = await getAPIdata('s',query)
  
    if((preResults.length > 0 && preResults === apiSearchRes.Search)) {
      const apiTitleRes = await getAPIdata('t', query)
      if(apiTitleRes.Title)
      getResults(apiTitleRes)
    }
    if(apiSearchRes.Search){
      getResults(apiSearchRes.Search)
      setPreResults(apiSearchRes.Search)
    } 
  }

  const handleNomination = (selected) => {
    let data = [...nomiData]
    data.push(selected)
    getNomiData(data)
    console.log(nomiData)
  }

  return (
    <>
      <ResultsContext.Provider value={results}>
        <NomiContext.Provider value={nomiData}>
          <SearchBar apiCall={apiCall} />
          <ResultsSection nominate={handleNomination} />
          <NomiSection nomiData={nomiData} />
        </NomiContext.Provider>
      </ResultsContext.Provider>
    </>
  );
}

export default App;
