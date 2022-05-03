import useLocalStorage from '../../hooks/LocalStorage.hook';
import './testform.style.css';

const Testform = () => {
    const [value, setValue] = useLocalStorage('testInput', '');

    return (
        <form action="" className="form">
            <label> TestInput:
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </label>
        </form>
    );
  }
  
  export default Testform;
  