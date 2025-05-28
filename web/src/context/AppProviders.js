// web/src/context/AppProviders.js - Combine all providers
import React from 'react';
import { AuthProvider } from './AuthContext';
import { ExpenseProvider } from './ExpenseContext';

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ExpenseProvider>
        {children}
      </ExpenseProvider>
    </AuthProvider>
  );
};
