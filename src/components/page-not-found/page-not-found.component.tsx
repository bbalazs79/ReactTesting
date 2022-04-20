import './page-not-found.style.css';
import { FaSadTear } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <>
        <FaSadTear className='icon-sad-face' />
        <h1 className="title">404</h1>
        <p className='description'>OOPS! Page Not Found! :(</p>
        </>
    );
  }
  
  export default PageNotFound;
  