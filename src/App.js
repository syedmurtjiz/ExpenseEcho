import React, { useState } from 'react';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <IncomeExpenses income={totalIncome} expenses={totalExpenses} />
      <TransactionList transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
};

export default App;
