// components/TransactionList.js
const TransactionList = ({ transactions, onTransactionClick }) => (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.hash} onClick={() => onTransactionClick(transaction.hash)}>
          Transaction {transaction.hash}
        </li>
      ))}
    </ul>
  );
  
  export default TransactionList;
  