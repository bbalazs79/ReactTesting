import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import Home from './components/home/Home.component';
import OtherPage from './components/otherpage/OtherPage.component';
import PageNotFound from './components/page-not-found/page-not-found.component';
import Testform from './components/testform/Testform';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/otherpage' element={<OtherPage />} />
          <Route path='/testform' element={<Testform />} />
          <Route path='/pagenotfound' element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
