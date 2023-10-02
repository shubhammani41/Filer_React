import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Modules/Global/NotFound/NotFound';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { lazy, useContext } from 'react';
import { AppContext } from './AppContext';
import { themeObjDark, themeObjLight } from './Constants/ThemeConstants';
import Header from './Modules/Global/Header/Header';
import AuthGuard from './Modules/Global/AuthGuard/AuthGuard';
const Auth = lazy(() => import('./Modules/Auth/Auth'));
const Dashboard = lazy(()=> import('./Modules/Dashboard/Dashboard'))


function App() {
  const [app_context_obj] = useContext(AppContext);
  return (
    <ThemeProvider theme={createTheme(app_context_obj.darkMode ? themeObjDark : themeObjLight)}>
      <CssBaseline  />
      {app_context_obj.userData.isLoggedIn?<Header/>:''}
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Auth />}></Route>
          <Route path="/dashboard/*" element={<AuthGuard component ={<Dashboard/>}  data={{isLoggedin:true}} />}></Route>
          {/* <Route path='/dashboard*' element={<Dashboard />}></Route> */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
