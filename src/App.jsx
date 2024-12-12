import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Detail from './pages/Detail';
// import { v4 as uuidv4 } from 'uuid'; // uuid 라이브러리 import
import fakeData from './data/fakeData.json';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // 초기 데이터 로드
    setExpenses(fakeData);
  }, []);

  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home expenses={expenses} setExpenses={setExpenses} />} />
        <Route path="/detail/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

  
