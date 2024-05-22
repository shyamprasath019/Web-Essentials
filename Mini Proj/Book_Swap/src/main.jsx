import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import AddBook from './AddBook.jsx';
import Browse from './Browse.jsx';
// import Login from './Login.jsx';
// import Register from './Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/browse' element={<Browse />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> */}
        
        {/* Optional: Add a catch-all route for debugging */}
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

