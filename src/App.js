import React, { useState, useEffect } from 'react';
import { useGlobalEvent } from 'beautiful-react-hooks';

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
  const [results, getResults] = useState([]);
  const [preResults, setPreResults] = useState([]);
  const [nomiData, getNomiData] = useState([]);
  const [isMenuOpened, toggleMenu] = useState(false);
  const [isToastOpened, toggleToast] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent('resize');

  onWindowResize((event: React.SyntheticEvent) => {
    setWindowWidth(window.innerWidth);
  });

  const apiCall = async (query) => {
    if(query.length === 0){
      getResults([])
    }

    const apiSearchRes = await getAPIdata('s', query)

    if ((preResults.length > 0 && preResults === apiSearchRes.Search)) {
      const apiTitleRes = await getAPIdata('t', query)
      if (apiTitleRes.Title)
        getResults(apiTitleRes)
    }
    if (apiSearchRes.Search) {
      getResults(apiSearchRes.Search)
      setPreResults(apiSearchRes.Search)
    }
  }

  const handleNomination = (selected, e) => {
    let data = [...nomiData]
    if (data.length === 5) {
      toggleToast(true)
    } else {
      data.push(selected)
      toggleToast(false)
      e.target.setAttribute('disabled', 'disabled');
      window.localStorage.setItem('nominations', data)
    }
    getNomiData(data)
  }

  const handleMenuToggle = _ => {
    if (!isMenuOpened) {
      toggleMenu(true)
    } else {
      toggleMenu(false)
    }
  }

  const handleRemoveNomi = (e) => {
    let dataIndex = e.target.getAttribute('data-index')
    let newNomiData = [...nomiData]
    newNomiData.splice(dataIndex, 1);
    window.localStorage.setItem('nominations', newNomiData)
    getNomiData(newNomiData)
  }

  const handleToastToggle = _ => {
    toggleToast(false)
  }

  useEffect(() => {
    const data = window.localStorage.getItem('nominations')
    if (data) {
      let savedData = data.split(',')
      let newNomiData = []
      for (let i = 0; i < savedData.length; i++) {
        if (i % 2 === 1) {
          newNomiData.push(savedData[i - 1] + ',' + savedData[i])
        }
      }
      getNomiData(newNomiData)
    }
  }, [])

  return (
    <>
      {
        windowWidth <= 768 ?
          <ResultsContext.Provider value={results}>
            <NomiContext.Provider value={nomiData}>
              <Toast show={isToastOpened} onClose={handleToastToggle} className='toast-option' autohide delay={3000}>
                <Toast.Body>Oops, You Already Have 5 Nominations</Toast.Body>
              </Toast>
              <OffCanvas width={300}
                transitionDuration={300}
                effect={"parallax"}
                isMenuOpened={isMenuOpened}
                position={"right"}
                className='offcanvas-options'>
                <OffCanvasBody>
                  <SearchBar apiCall={apiCall} />
                  <Button variant="outline-primary" onClick={handleMenuToggle} className='menu-button' >View Nominations</Button>
                  <ResultsSection nominate={handleNomination} />
                </OffCanvasBody>
                <OffCanvasMenu>
                  <NomiSection nomiData={nomiData} closeBtn={handleMenuToggle} rmvNomi={handleRemoveNomi} win_width={windowWidth}/>
                </OffCanvasMenu>
              </OffCanvas>
            </NomiContext.Provider>
          </ResultsContext.Provider>
          :
          <div className='main-container'>
          <ResultsContext.Provider value={results}>
            <NomiContext.Provider value={nomiData}>
              <Toast show={isToastOpened} onClose={handleToastToggle} className='toast-option' autohide delay={3000}>
                <Toast.Body>Oops, You Already Have 5 Nominations</Toast.Body>
              </Toast>
              <SearchBar apiCall={apiCall} />
              <ResultsSection nominate={handleNomination} />
              <NomiSection nomiData={nomiData} closeBtn={handleMenuToggle} rmvNomi={handleRemoveNomi} win_width={windowWidth}/>
            </NomiContext.Provider>
          </ResultsContext.Provider>
          </div>
      }
    </>
  );
}

export default App;
