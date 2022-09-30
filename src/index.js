import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/ForgotPassword'
import './pages/CheckEmail'
import './pages/NewPassword'
import './pages/PasswordReset'
import './pages/Roles'
import './pages/ProjectManagement'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ForgotPassword from './pages/ForgotPassword'
import CheckEmail from './pages/CheckEmail'
import NewPassword from './pages/NewPassword'
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';
import Roles from './pages/Roles'
import Features from './components/Features';
import ProtectedRoute from './pages/ProtectedRoute';
import UseAuth from './pages/useAuth'
import Register from './pages/Register'
import ProjectManagement from './pages/ProjectManagement'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      
      <Route path="/Register" element={<Register/>}/>
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/check" element={<CheckEmail />} />
      <Route path="/reset" element={<NewPassword />} />
      <Route path="/new" element={<PasswordReset />} />
      < Route element={<UseAuth path="/" />} />
      <Route path="/dashboard/" element={< ProtectedRoute Component={Dashboard} />} >
      
        {/* <Route path='roles' element={<Roles />}></Route> */}
        <Route path='roles' element={<Roles />}></Route>
        <Route path="analytics" element={<ProjectManagement/>}></Route>
        <Route path='features' element={<Features />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();














