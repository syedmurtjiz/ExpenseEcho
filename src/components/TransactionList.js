import React from 'react';

export const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>${transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
