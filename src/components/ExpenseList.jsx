import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const Show = styled.div`
  max-width: 1000px;
  margin: 20px auto;
`;

function ExpenseList({ expenses, selectedMonth }) {
  const navigate = useNavigate();

  if (!selectedMonth) {
    return <Show>월을 선택해주세요.</Show>;
  }

  // 선택된 월에 해당하는 지출 리스트 필터링 함수
  const filteredExpenses = expenses.filter(expense => {
    const expenseMonth = expense.date.split('-')[1]; // 지출 날짜에서 월 부분 추출
    return expenseMonth === selectedMonth.padStart(2, '0');
  });

  // 텍스트 자르기 함수
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <ListContainer>
      <ListTitle>지출 리스트</ListTitle>
      <ul>
        {filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} onClick={() => navigate(`/detail/${expense.id}`)}>
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


