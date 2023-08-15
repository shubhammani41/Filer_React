import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Global() {
  const [app_context, setAppContext] = useState({
    userData:{
      isLoggedIn:false,
      data:{}
    },
    darkMode:false
  });
  return (
    <AppContext.Provider value={[app_context, setAppContext]}>
      <App />
    </AppContext.Provider>
  )
}
root.render(
  <Global />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
