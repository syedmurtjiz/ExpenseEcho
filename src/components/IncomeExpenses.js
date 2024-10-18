import React from 'react';

export const IncomeExpenses = ({ income, expenses }) => {
  return (
    <div className="income-expenses">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-${Math.abs(expenses).toFixed(2)}</p>
      </div>
    </div>
  );
};
