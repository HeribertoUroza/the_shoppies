import React from 'react';

// CONTAINERS
import SearchBar from './containers/SearchBar';
import ResultsSection from './containers/ResultsSection';

// CONTEXT
import ResultsContext, { results } from './context/ResultsContext'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  return (
    <>
      <ResultsContext.Provider value={results}>
        <SearchBar />
        <ResultsSection />
      </ResultsContext.Provider>
    </>
  );
}

export default App;
