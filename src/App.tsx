import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import Home from './components/home/Home.component';
import Login from './components/login/Login.component';
import BeerListView from './components/beer/BeerListView.component';
import PageNotFound from './components/page-not-found/page-not-found.component';
import Testform from './components/testform/Testform.component';
import BeerDetails from './components/beer/BeerDetails.component';
import { useState } from 'react';
import { BeerContext } from './contexts/Beer.context';


function App() {
  const [beers, setBeers] = useState();

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <BeerContext.Provider value={{beers, setBeers}}>
            <Route path='/beer' element={<BeerListView />} />
          </BeerContext.Provider>
          <Route path='/testform' element={<Testform />} />
          <Route path='/login' element={<Login />} />
          <BeerContext.Provider value={{beers, setBeers}}>
            {<Route path='/beer/details/:id' element={<BeerDetails />} />} 
          </BeerContext.Provider>
          <Route path='/pagenotfound' element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
