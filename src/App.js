import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Admin from './pages/Admin';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
      <Route path='/Login'element ={<Login />}/>
      <Route path='/Payment'element ={<Payment />}/>
      <Route path='/Admin'element ={<Admin />}/>
      <Route path ='/Register'element ={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
