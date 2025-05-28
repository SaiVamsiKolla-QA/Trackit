// web/src/context/ExpenseContext.js - Expense management context
import React, { createContext, useContext } from 'react';
import { useExpenses } from '../../shared/hooks/useExpenses';
import { useAuthContext } from './AuthContext';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const { user } = useAuthContext();
  const expenses = useExpenses(user?.uid);
  
  return (
    <ExpenseContext.Provider value={expenses}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
};