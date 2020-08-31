import React, { useState } from 'react';

// CONTAINERS
import SearchBar from './containers/SearchBar';
import ResultsSection from './containers/ResultsSection';

// CONTEXT
import ResultsContext from './context/ResultsContext'

// API CALL
import getAPIdata from './api/OMDB';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  const [ results, getResults ] = useState([])
  const [ preResults, setPreResults] = useState([])

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

  return (
    <>
      <ResultsContext.Provider value={results}>
        <SearchBar apiCall={apiCall} />
        <ResultsSection />
      </ResultsContext.Provider>
    </>
  );
}

export default App;
