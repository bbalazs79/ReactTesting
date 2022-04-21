import { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    return (
        <label> First Name:
            <input type="text" onChange={e => setValue(e.target.value)}/>
        </label>    
    );
  }
  
  export default Input;
  