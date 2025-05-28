import { useState, useEffect } from 'react';
import { 
  getUserExpenses, 
  addExpense, 
  updateExpense, 
  deleteExpense 
} from '../firebase/expenses';

export const useExpenses = (userId) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch expenses
  const fetchExpenses = async () => {
    if (!userId) return;
    
    try {
      setLoading(true);
      const { expenses: fetchedExpenses } = await getUserExpenses(userId);
      setExpenses(fetchedExpenses);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new expense
  const createExpense = async (expenseData) => {
    try {
      const expenseId = await addExpense(userId, expenseData);
      const newExpense = { id: expenseId, ...expenseData, userId };
      setExpenses(prev => [newExpense, ...prev]);
      return expenseId;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update existing expense
  const editExpense = async (expenseId, updateData) => {
    try {
      await updateExpense(expenseId, updateData);
      setExpenses(prev => 
        prev.map(expense => 
          expense.id === expenseId 
            ? { ...expense, ...updateData }
            : expense
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete expense
  const removeExpense = async (expenseId) => {
    try {
      await deleteExpense(expenseId);
      setExpenses(prev => prev.filter(expense => expense.id !== expenseId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [userId]);

  return {
    expenses,
    loading,
    error,
    createExpense,
    editExpense,
    removeExpense,
    refreshExpenses: fetchExpenses
  };
};