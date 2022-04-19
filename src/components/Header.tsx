import './header.css';
import logo from '../assets/img/logo.png';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header>
        <div className='navbar'>
          <img src={logo} alt=''/>

          <Router>
            <div>
              <nav>
                <Link to='/'>Home</Link> |
                <Link to='/otherpage'>OtherPage</Link>
              </nav>
            </div>
          </Router>

          <div>
            {isLoggedIn && <button className='navbar-user'>BB</button>}
            { isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}} className='navbar-btn'>Logout</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}} className='navbar-btn'>Login</button> }
          </div>
        </div>
          
    </header>
  );
}

export default Header;
