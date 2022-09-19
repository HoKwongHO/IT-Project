import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Apple from "./App";
// import Page from './Login/loginpage';
import Login from './Login/login'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apple />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
}



// const About = () => {
//   return <div>这里是卡拉云的主页</div>
// }

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>
}

export default App; 