import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Modules/Global/NotFound/NotFound';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { lazy, useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { themeObjDark, themeObjLight } from './Constants/ThemeConstants';
import Header from './Modules/Global/Header/Header';
const Auth = lazy(() => import('./Modules/Auth/Auth'));


function App() {
  const toggleMode = (val) => {
    let data = {...app_context_obj};
    data.darkMode = val;
    setAppContext(data);
  }
  const [app_context_obj, setAppContext] = useContext(AppContext);
  return (
    <ThemeProvider theme={createTheme(app_context_obj.darkMode ? themeObjDark : themeObjLight)}>

      <CssBaseline  />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Auth />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Button onClick={() => toggleMode(!app_context_obj.darkMode)}>Toggle {app_context_obj.darkMode?'dark':'light'}</Button>
    </ThemeProvider>
  );
}

export default App;
