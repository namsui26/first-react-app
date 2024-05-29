import React, { createContext, useContext, useState } from 'react';

// Context 생성
const ExpenseContext = createContext({});

// Context를 쉽게 사용할 수 있도록 커스텀 훅 생성
export const useExpenseContext = () => useContext(ExpenseContext);

// Context Provider 컴포넌트
export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};
