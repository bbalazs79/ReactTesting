import './header.style.css';
import logo from '../../assets/img/logo.png';
import { useState } from 'react';
import Nav from '../nav/nav.component';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
        <div className='navbar'>
          <img src={logo}/>
          <Nav />
          <div>
            {isLoggedIn && <button className='navbar-user'>BB</button>}
            { isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}} className='navbar-btn'>Logout</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}} className='navbar-btn'>Login</button> }
          </div>
        </div>
          
    </header>
  );
}

export default Header;
