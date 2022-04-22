import { Link } from "react-router-dom";
import './nav.style.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link className="nav-item" to="/">Home</Link></li>
                <li><Link className="nav-item" to="/beer">Beers</Link></li>
                <li><Link className="nav-item" to="/testform" >TestForm</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;  