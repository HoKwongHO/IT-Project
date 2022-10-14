import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Apple from "./App";
// import Page from './Login/loginpage';
import Login from './Login/login'
import Register from './Register/register';
import Demo from './demopage/submit'
import Search from './Components/Search/Search';
import Stafflogin from './Login/staffLogin';
//import ProtectedRoute from './ProtectedRoute';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apple />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/demo' element = {<Demo />} /> 
      <Route path='/search' element = {<Search />} />
      <Route path='/stafflogin' element = {<Stafflogin />} />

  {/* <Route
   path="/demo"
      element={
        <ProtectedRoute>
          <Demo />
        </ProtectedRoute>
      }
    /> */}

    </Routes>
  </BrowserRouter>
}


export default App; 