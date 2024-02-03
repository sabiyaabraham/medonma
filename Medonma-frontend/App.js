import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch } from '@mui/material';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/signup'element={<Signup/>}/>

    
     </Routes>
     
    
      
    

    </div>
  );
}

export default App;
