import './header.style.css';
import logo from '../../assets/img/logo.png';
import Nav from '../nav/Nav.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';


const Header = () => {
  const {auth, logout} = useContext(GlobalContext);

  return (
    <header>
        <div className='navbar'>
          <img src={logo} alt='' />
          <Nav />
          <div>
            { auth.isLoggedIn && <button className='navbar-user'>{auth.username.at(0)?.toUpperCase()}</button> }
            { auth.isLoggedIn ? <button onClick={logout} className='navbar-btn' >Logout</button> : <Link className="nav-item" to='/login'>Login</Link> }
          </div>
        </div>      
    </header>
  );
}

export default Header;
