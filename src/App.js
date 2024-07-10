import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import Navbar from './components/Navbar';
import Jewelery from './pages/Jewelery';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Singleproduct from './components/Singleproduct';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/electronics' element={<Electronics />}/>
        <Route path='/jewelery' element={<Jewelery/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/singleproduct/:product_id' element={<Singleproduct/>}></Route>
        
       
      </Routes>
    </Router>
  );
}

export default App;
