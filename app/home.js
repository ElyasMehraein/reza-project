// pages/index.js
import { useState } from 'react';
import BlockList from '../components/BlockList';
import TransactionList from '../components/TransactionList';
import SearchBox from '../components/SearchBox';

const Home = () => {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch latest blocks and transactions
//   useEffect(() => {
    // Your code to fetch blocks and transactions from the subgraph
    // Example:
    const latestBlocks = 100 // Fetch latest blocks using subgraph
    const latestTransactions = 200 // Fetch latest transactions using subgraph
    setBlocks(latestBlocks);
    setTransactions(latestTransactions);
//   }, []);

  const handleBlockClick = (blockNumber) => {
    // Handle block click, e.g., show block details
    console.log(`Block clicked: ${blockNumber}`);
  };

  const handleTransactionClick = (transactionHash) => {
    // Handle transaction click, e.g., show transaction details
    console.log(`Transaction clicked: ${transactionHash}`);
  };

  const handleSearch = (query) => {
    // Handle search, e.g., filter transactions or blocks based on the query
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Etherscan Landing</h1>
      <SearchBox onSearch={handleSearch} />
      <h2>Latest Blocks</h2>
      <BlockList blocks={blocks} onBlockClick={handleBlockClick} />
      <h2>Latest Transactions</h2>
      <TransactionList transactions={transactions} onTransactionClick={handleTransactionClick} />
    </div>
  );
};

export default Home;
