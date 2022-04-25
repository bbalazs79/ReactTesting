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
import { GlobalProvider } from './contexts/GlobalState';


function App() {
  const [beers, setBeers] = useState();

  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/beer' element={<BeerListView />} />
            <Route path='/testform' element={<Testform />} />
            <Route path='/login' element={<Login />} />
            <Route path='/beer/details/:id' element={<BeerDetails />} />
            <Route path='/pagenotfound' element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
          </Routes>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
