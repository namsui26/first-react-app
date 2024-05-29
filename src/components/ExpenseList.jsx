import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchExpenses } from '../redux/slices/expenseSlice'; // RTK 적용

const ListContainer = styled.div`
  background-color: skyblue;
  border-radius: 10px;
  max-width: 1000px;
  margin: 20px auto;
`;

const ListTitle = styled.h2`
  padding: 15px;
`;

const ExpenseItem = styled.li`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  list-style: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ExpenseDetail = styled.div`
  margin-bottom: 5px;
`;

function ExpenseList({ selectedMonth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expense.expenses);

  useEffect(() => {
    // fetchExpenses 액션을 dispatch하여 비동기로 지출 데이터를 가져옵니다.
    dispatch(fetchExpenses());
  }, [dispatch]);

  if (!selectedMonth) {
    return <div>월을 선택해주세요.</div>;
  }

  const filteredExpenses = expenses.filter(expense => {
    const expenseMonth = expense.date.split('-')[1];
    return expenseMonth === selectedMonth.padStart(2, '0');
  });

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const handleItemClick = (id) => {
    const expense = expenses.find(expense => expense.id === id);
    if (expense) {
      navigate(`/detail/${id}`);
    } else {
      alert('지출을 찾을 수 없습니다.');
    }
  };

  return (
    <ListContainer>
      <ListTitle>지출 리스트</ListTitle>
      <ul>
        {filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} onClick={() => handleItemClick(expense.id)}>
            <ExpenseDetail>날짜: {expense.date}</ExpenseDetail>
            <ExpenseDetail>지출 항목: {truncateText(expense.item, 10)}</ExpenseDetail>
            <ExpenseDetail>금액: {expense.amount}</ExpenseDetail>
            <ExpenseDetail>설명: {truncateText(expense.description, 20)}</ExpenseDetail>
          </ExpenseItem>
        ))}
      </ul>
    </ListContainer>
  );
}

export default ExpenseList;

