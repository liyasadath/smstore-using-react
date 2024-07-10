import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Electronics from './pages/Electronics';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Slider from './components/Slider';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
// import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  {/* <Login/> */}
  {/* <Registration/> */}
{/* <Profile/> */}
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
