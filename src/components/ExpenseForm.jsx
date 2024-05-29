import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; // useDispatch 사용
import { addExpense } from '../redux/slices/expenseSlice';
import { v4 as uuidv4 } from 'uuid';

const FormContainer = styled.div`
  margin-bottom: 20px;
  background-color: skyblue;
  border-radius: 10px;
  max-width: 1000px;
  margin: 50px auto 20px
`;

const Form = styled.form`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
  margin-right: 5px
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 0px 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function ExpenseForm() {
  const dispatch = useDispatch(); // useDispatch 사용

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const date = e.target.date.value;
    const item = e.target.item.value;
    const amount = parseFloat(e.target.amount.value);
    const description = e.target.description.value;
  
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      alert('올바른 날짜 형식(YYYY-MM-DD)으로 입력해주세요.');
      return;
    }
  
    if (isNaN(amount) || amount <= 0) {
      alert('올바른 금액을 입력해주세요.');
      return;
    }
  
    const expense = {
      id: id,
      date: date,
      item: item,
      amount: amount,
      description: description
    };
  
    dispatch(addExpense(expense));
    e.target.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date">날짜</Label>
          <Input type="date" id="date" name="date" placeholder="YYYY-MM-DD" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="item">항목</Label>
          <Input type="text" id="item" name="item" placeholder="지출 항목" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">금액</Label>
          <Input type="number" id="amount" name="amount" placeholder="지출 금액" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">내용</Label>
          <Input type="text" id="description" name="description" placeholder="지출 내용" required />
        </FormGroup>
        <Button type="submit">저장</Button>
      </Form>
    </FormContainer>
  );
}

export default ExpenseForm;
