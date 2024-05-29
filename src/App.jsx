import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext'; // ExpenseProvider를 가져옵니다
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Detail from './pages/Detail';
// import { v4 as uuidv4 } from 'uuid'; // uuid 라이브러리 import

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
    <ExpenseProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      </ExpenseProvider>
    </Router>
    </>
    
  );
}

export default App;

  
