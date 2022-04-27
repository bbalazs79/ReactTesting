import { useState } from 'react';
import './testform.style.css';

const Testform = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitValue = () => {
        const data = {
            'firstName': firstName,
            'lastName': lastName,
        }
    }

    return (
        <form action="" className="form">
            <label> First Name:
                <input type="text" onChange={e => setFirstName(e.target.value)}/>
            </label>
            
            
            <label> Last Name: 
                <input type="text" onChange={e => setLastName(e.target.value)} />
            </label>

            <input className='form-submit' type="button" value="Submit" onClick={submitValue}/>
        </form>
    );
  }
  
  export default Testform;
  