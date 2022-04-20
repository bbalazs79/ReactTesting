import { Link, NavLink } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/otherpage">OtherPage</Link></li>
                <li><Link to="/testform" >TestForm</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;  