import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginRegisterPage from './pages/LoginRegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginRegisterPage action='login'/>}></Route>
        <Route path='/register' element={<LoginRegisterPage action='register'/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
