import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy,
    limit,
    Timestamp
  } from 'firebase/firestore';
  import { db } from './config';
  
  const EXPENSES_COLLECTION = 'expenses';
  
  export const addExpense = async (userId, expenseData) => {
    try {
      const expense = {
        ...expenseData,
        userId,
        date: Timestamp.fromDate(new Date(expenseData.date)),
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date())
      };
      
      const docRef = await addDoc(collection(db, EXPENSES_COLLECTION), expense);
      return docRef.id;
    } catch (error) {
      console.error('Error adding expense:', error);
      throw error;
    }
  };
  
  export const getUserExpenses = async (userId, limitCount = 50) => {
    try {
      const q = query(
        collection(db, EXPENSES_COLLECTION),
        where('userId', '==', userId),
        orderBy('date', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const expenses = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        expenses.push({
          id: doc.id,
          ...data,
          date: data.date.toDate(),
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate()
        });
      });
      
      return { expenses };
    } catch (error) {
      console.error('Error getting expenses:', error);
      throw error;
    }
  };
  
  export const updateExpense = async (expenseId, updateData) => {
    try {
      const expenseRef = doc(db, EXPENSES_COLLECTION, expenseId);
      const updates = {
        ...updateData,
        updatedAt: Timestamp.fromDate(new Date())
      };
      
      if (updateData.date) {
        updates.date = Timestamp.fromDate(new Date(updateData.date));
      }
      
      await updateDoc(expenseRef, updates);
    } catch (error) {
      console.error('Error updating expense:', error);
      throw error;
    }
  };
  
  export const deleteExpense = async (expenseId) => {
    try {
      const expenseRef = doc(db, EXPENSES_COLLECTION, expenseId);
      await deleteDoc(expenseRef);
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw error;
    }
  };