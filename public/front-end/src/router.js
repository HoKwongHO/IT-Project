import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Apple from "./App";
// import Page from './Login/loginpage';
import Login from './Login/login'
import Register from './Register/register';
import Demo from './demopage/submit'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apple />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/demo' element = {<Demo />} />
    </Routes>
  </BrowserRouter>
}


export default App; 