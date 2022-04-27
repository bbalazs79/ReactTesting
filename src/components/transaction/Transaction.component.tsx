import AddTransaction from "./add-transaction/AddTransaction.component";
import Balance from "./balance/Balance.component";
import History from "./history/History.component";
import './transaction.style.css'

const Transaction = () => {
    return (
        <div className="transaction-page">
            <h1>Expense Tracker</h1>
            <Balance />
            <History />
            <AddTransaction />
        </div>
    );
  }
  
  export default Transaction;
  