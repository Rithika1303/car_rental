import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import FrontPage from './pages/FrontPage';
import HostCar from './pages/HostCar';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/Register' exact element={<Register />} />
          <Route path='/booking/:carid' exact element={<BookingCar />} />
          <Route path='/FrontPage' exact element={<FrontPage />} />
          <Route path='/HostCar' exact element={<HostCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem('user')) {
    return <Route {...props} />
  }
  else {
    return <redirect to='/Login' />
  }
}