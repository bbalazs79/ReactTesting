import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import OtherPage from './components/OtherPage';
import Testform from './components/Testform';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello From React</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/otherpage' component={OtherPage} />
          <Route path='/testform' component={Testform} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
