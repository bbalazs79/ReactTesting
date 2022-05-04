import useLocalStorage from '../../hooks/useLocalStorage.hook';
import useUpdateLogger from '../../hooks/useUpdateLogger.hook';
import './testform.style.css';

const Testform = () => {
    const [value, setValue] = useLocalStorage('testInput', '');
    useUpdateLogger(value);
    return (
        <form action="" className="form">
            <label> TestInput:
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </label>
        </form>
    );
  }
  
  export default Testform;
  