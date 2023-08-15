import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Modules/Global/NotFound/NotFound';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { lazy, useContext, useState } from 'react';
import { ThemeContext, themeObjDark, themeObjLight } from './theme';
const Auth = lazy(()=>import ('./Modules/Auth/Auth'));


function App() {
  const toggleMode = (val) => {
    setTheme(val)
  }
  const curr_theme = useContext(ThemeContext);
  const [isDark, setTheme] = useState(curr_theme);
  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeProvider theme={createTheme(isDark?themeObjDark:themeObjLight)}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Auth />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Button onClick={() => toggleMode(!isDark)}>Toggle done</Button>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
