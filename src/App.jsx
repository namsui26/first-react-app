import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Redux의 Provider 가져오기
import { store } from "./redux/config/store";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
