import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalState';
import './login.style.css';

const Login = () => {
    let navigate = useNavigate();
    
    const { login } = useContext(GlobalContext);
    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);
    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState(true);
    
    const submitValue = () => {
        const data = {
            'username': username,
            'password': password,
        }
        login(data.username);

        navigate('/');
    }

    function usernameValidation() {
        username?.length < 3 ? setUsernameValid(false) : setUsernameValid(true);
    }

    function usernameOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
        username.length >= 3 && setUsernameValid(true);
    }

    function passValidation() {
        password?.length < 3 ? setPassValid(false) : setPassValid(true);
    }

    function passRecheck(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
        password.length >= 3 && setPassValid(true);
    }

    return (
        <div className='page-container'>
            <form action="" className="login-form">
                <h2>Login</h2>
                <label className={`label ${!usernameValid && 'invalid'}`} htmlFor='username' > Username: {!usernameValid && 'Must be more than 3 character!'}</label>
                <input 
                    className={`input-field ${!usernameValid && 'invalid'}`} 
                    type="text" 
                    name='username' 
                    placeholder='username' 
                    onBlur={usernameValidation}
                    onChange={ e => usernameOnChange(e) }
                />
                
                <label className={`label ${!passValid && 'invalid'}`} htmlFor='password'> Password: {!passValid && 'Must be more than 3 character!'}</label> 
                <input 
                    className={`input-field ${!passValid && 'invalid'}`} 
                    name='password' 
                    type="password"  
                    placeholder='password' 
                    onBlur={passValidation}
                    onChange={e => passRecheck(e)}
                />
                
                <input className='login-btn' disabled={!username || !password} type="button" value="Login" onClick={submitValue}/>
            </form>
        </div>
    );
  }
  
  export default Login;
  