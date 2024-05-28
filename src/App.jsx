import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { v4 as uuidv4 } from 'uuid'; // uuid 라이브러리 import

function App() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "점심 식사"
    },
    {
      id: uuidv4(),
      date: "2024-01-10",
      item: "교통비",
      amount: 5000,
      description: "지하철 요금"
    }
  ]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;


