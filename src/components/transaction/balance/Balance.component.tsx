import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalState';
import './balance.style.css';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    function getTotalAmount(): number {
        let totalAmount = 0;
        transactions?.forEach(transaction =>{
            totalAmount += transaction.amount;
        });
        return totalAmount;
    }

    function getIncomeAmount(): number {
        let totalAmount = 0;
        transactions?.forEach(transaction => {
            if(transaction.amount > 0)
                totalAmount += transaction.amount;
        });
        return totalAmount;
    }

    function getExpenseAmount(): number {
        let totalAmount = 0;
        transactions?.forEach(transaction => {
            if(transaction.amount < 0)
                totalAmount += transaction.amount;
        });
        return totalAmount;
    }

    return (
        <div className="balance-content">
            <h2 className="balance-content-title-balance">Balance</h2>
            <h2 className="balance-content-title-amount">{getTotalAmount() < 0 && '-'}${Math.abs(getTotalAmount())}</h2>
            <div className="balance-content-section">
                <div className="balance-content-section-income">
                    <label className="balance-content-label" htmlFor="income">INCOME</label>
                    <input className="balance-content-input bg-color-green" type="text" name="income" value={`$${getIncomeAmount()}`} disabled />
                </div>

                <div className="balance-content-section-expense">
                    <label className="balance-content-label" htmlFor="expense">EXPENSE</label>
                    <input className="balance-content-input bg-color-red" type="text" name="expense" value={`-$${Math.abs(getExpenseAmount())}`} disabled />
                </div>
            </div>
        </div>
    );
  }
  
  export default Balance;
  