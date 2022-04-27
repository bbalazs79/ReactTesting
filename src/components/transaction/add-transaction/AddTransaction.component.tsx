import { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalState';
import { ITransaction } from '../../../interfaces/IGlobalContext.interface';
import './addTransaction.style.css';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [transactionName, setTransactionName] = useState('');
    const [amount, setAmount] = useState(0);

    const submitValue = () => {
        const data: ITransaction = {
            id: uuidv4(),
            text: transactionName,
            amount: amount,
        }
        
        addTransaction(data);
    }

    return (
        <div className="add-transaction-content">
            <label htmlFor="transactionName">Text</label>
            <input type="text" name="transactionName" onChange={e => setTransactionName(e.target.value)} />
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" onChange={e => setAmount(Number(e.target.value))} />
            <button onClick={()=>submitValue()} className='add-transaction-content-btn'>Add Transaction</button>
        </div>
    );
  }
  
  export default AddTransaction;
  