import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import OtherPage from './components/otherpage/OtherPage';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
