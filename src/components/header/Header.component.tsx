import './header.style.css';
import logo from '../../assets/img/logo.png';
import Nav from '../nav/Nav.component';
import { Link } from 'react-router-dom';


const Header = () => {
  function checkUserIsLoggedIn(): boolean {
    if(localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.setItem('isLoggedIn','false');
    window.location.href='/login';
  }

  return (
    <header>
        <div className='navbar'>
          <img src={logo} alt='' />
          <Nav />
          <div>
            { checkUserIsLoggedIn() && <button className='navbar-user'>{localStorage.getItem('username')?.at(0)?.toUpperCase()}</button> }
            { checkUserIsLoggedIn() ? <button onClick={logout} className='navbar-btn' >Logout</button> : <Link className="nav-item" to='/login'>Login</Link> }
          </div>
        </div>      
    </header>
  );
}

export default Header;
