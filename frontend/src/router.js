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
import Protected from './protected'
import ProtectedStaff from './ProtectedStaff'


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apple />} />
      <Route path="/customerlogin" element={<Login />} />
      <Route path="/customerregister" element={<Register />} />
      <Route path="/stafflogin" element={<StaffLogin />} />
      <Route path="/staffregister" element={<Register />} />
      <Route path='/demo' element = {<ProtectedStaff><Demo /></ProtectedStaff>} />
      <Route path='/search' element = {<Protected><Search /></Protected>} />
      <Route path='/detail' element = {<Protected><ProductDetail /></Protected>} />
      <Route path='/cart' element = {<Protected><Cart /></Protected>} />
      <Route path='/ClientLogined' element = {<Protected><ClientLogined /></Protected>} />
      <Route path='/StaffLogined' element = {<ProtectedStaff><StaffLogined /></ProtectedStaff>} />
    </Routes>
  </BrowserRouter>
}


export default App; 