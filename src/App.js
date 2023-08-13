import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Widgets/Login/Login';
import NotFound from './Widgets/NotFound/NotFound';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext, themeObjDark, themeObjLight } from './theme';


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
            <Route path='' element={<Login />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Button onClick={() => toggleMode(!isDark)}>Toggle done</Button>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
