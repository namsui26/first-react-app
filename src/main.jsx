import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/combine/rootReducer';
import App from './App.jsx';

// Redux store 생성
const store = configureStore({
  reducer: rootReducer,
});

// App을 Provider로 감싸서 Redux store 제공
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

