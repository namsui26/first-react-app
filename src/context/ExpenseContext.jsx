// src/ExpenseContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fakeData } from '../data/fakeData'; // fakeData.js 파일에서 fakeData를 가져옵니다.

const ExpenseContext = createContext({});

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(fakeData); // 컴포넌트가 마운트될 때 fakeData를 설정합니다.
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};


