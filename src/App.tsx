import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import OtherPage from './components/OtherPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello From React</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/otherpage' component={OtherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
