import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalState';
import './history.style.css';

const History = () => {
    const { transactions, removeTransaction } = useContext(GlobalContext);

    return (
        <div className="history-content">
            {transactions.map(transaction=>(
                <div className="history-content-card" key={transaction.id}>
                    <button onClick={()=>removeTransaction(transaction.id)}>X</button>
                    <span>{transaction.text}</span>
                    <span>{transaction.amount < 0 && '-'}${Math.abs(transaction.amount)}</span>
                </div>
            ))}
        </div>
    );
  }
   
  export default History;
  