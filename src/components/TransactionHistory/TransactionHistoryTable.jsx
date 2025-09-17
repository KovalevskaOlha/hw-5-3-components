import { TransactionHistoryHead } from "./TransactionHistoryHead"
import { TransactionHistoryBody } from "./TransactionHistoryBody";
import transactions from '../../data/transactions.json';

export const TransactionHistoryTable = () => {
    return (
        <table className="transaction__table">
          <TransactionHistoryHead />
          {transactions.map((transaction => {
            return <TransactionHistoryBody transaction={transaction} />
          }))}
        </table>
    )
}