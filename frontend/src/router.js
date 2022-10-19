import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Apple from "./App";
import Login from './Login/login'
import Register from './Register/register';
import StaffLogin from './Login/staffLogin';
import Demo from './demopage/submit'
import Search from './Components/Search/Search';
import Stafflogin from './Login/staffLogin';
import ProductDetail from './ProductDetail/ProductDetail';
import Cart from './sample';
import ClientLogined from './Components/logined/ClientLogined'
import StaffLogined from './Components/logined/StaffClientLogined'


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apple />} />
      <Route path="/customerlogin" element={<Login />} />
      <Route path="/customerregister" element={<Register />} />
      <Route path="/stafflogin" element={<StaffLogin />} />
      <Route path="/staffregister" element={<Register />} />
      <Route path='/demo' element = {<Demo />} />
      <Route path='/search' element = {<Search />} />
      <Route path='/stafflogin' element = {<Stafflogin />} />
      <Route path='/detail' element = {<ProductDetail />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/ClientLogined' element = {<ClientLogined />} />
      <Route path='/StaffLogined' element = {<StaffLogined />} />
    </Routes>
  </BrowserRouter>
}


export default App; 