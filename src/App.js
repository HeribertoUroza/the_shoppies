import React, { useState } from 'react';

// CONTAINERS
import SearchBar from './containers/SearchBar';
import ResultsSection from './containers/ResultsSection';
import NomiSection from './containers/NomiSection';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

// CONTEXT
import ResultsContext from './context/ResultsContext';
import NomiContext from './context/NomiContext';

// API CALL
import getAPIdata from './api/OMDB';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import { Button, Toast } from 'react-bootstrap';

function App() {
  const [ results, getResults ] = useState([]);
  const [ preResults, setPreResults] = useState([]);
  const [ nomiData, getNomiData ] = useState([]);
  const [isMenuOpened, toggleMenu] = useState(false);
  const [isToastOpened, toggleToast ] = useState(false);

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
    if(data.length === 5){
      toggleToast(true)
    } else {
      data.push(selected)
      toggleToast(false)
    }
    getNomiData(data)
  }

  const handleMenuToggle = _=> {
    if(!isMenuOpened){
      toggleMenu(true)
    } else {
      toggleMenu(false)
    }
  }

  const handleRemoveNomi = (e)=> {
    let dataIndex = e.target.getAttribute('data-index')
    let newNomiData = [...nomiData]
    newNomiData.splice(dataIndex, 1);
    getNomiData(newNomiData)
  }

  const handleToastToggle = _=> {
    toggleToast(false)
  }

  return (
    <>
      <ResultsContext.Provider value={results}>
        <NomiContext.Provider value={nomiData}>
          <Toast show={isToastOpened} onClose={handleToastToggle} className='toast-option' autohide delay={3000}>
            <Toast.Body>Oops, You Already Have 5 Nominations</Toast.Body>
          </Toast>
          <OffCanvas width={300}
              transitionDuration={300}
              effect={"parallax"}
              isMenuOpened={isMenuOpened}
              position={"right"}>         
            <OffCanvasBody>
              <SearchBar apiCall={apiCall} />
              <Button variant="outline-primary" onClick={handleMenuToggle} className='menu-button' >View Nominations</Button>
              <ResultsSection nominate={handleNomination} />
            </OffCanvasBody>
            <OffCanvasMenu>
              <NomiSection nomiData={nomiData} closeBtn={handleMenuToggle} rmvNomi={handleRemoveNomi}/>
            </OffCanvasMenu>
          </OffCanvas>
        </NomiContext.Provider>
      </ResultsContext.Provider>
    </>
  );
}

export default App;
