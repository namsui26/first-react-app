import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // BrowserRouter로 변경
import { Provider } from 'react-redux'; // Redux의 Provider 가져오기
import { store } from './redux/config/store';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;


