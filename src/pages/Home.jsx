import styled from "styled-components";
import { useState } from "react";
import MonthSelector from "../components/MonthSelector";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;ExpenseForm
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home({ expenses, setExpenses }) {
  const [month, setMonth] = useState(1);

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  return (
    <Container>
      <ExpenseForm
        month={month}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <MonthSelector month={month} setMonth={setMonth} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}
