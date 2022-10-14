import logo from './logo.svg';
import './App.css';
import Login from './Login/login';
import React,{ useState,useEffect } from 'react';
import Register from './Register/register';
import Header from './Components/Header';
import CardList from './Components/CarList/CardList';
import Information from './Components/Information';
// import ThemeContext from './ThemeContext/ThemContext'
import Footer from './Components/Footer';
import { useThemeContext } from './ThemeContext/ThemContext';
import Sitemap from './sitemap';
import axios from 'axios';

function App() {
  const { theme } = useThemeContext();
  const [list,setList] = useState([
    {
      _id: '1',
      name: 'test',
      picture: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
      price: 4,
      detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
    },
    // {
    //   title: 'test',
    //   img: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
    //   detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
    // },
    // {
    //   title: 'test',
    //   img: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
    //   detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
    // },
    // {
    //   title: 'test',
    //   img: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
    //   detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
    // }
  ]);

  console.log(list)

  useEffect(() => {
    fetch("http://localhost:3030/all-product")
        .then((res) => res.json())
        .then((jsonRes) => setList(jsonRes));
}, []);    

console.log(list)

  // const initData = () => {
  //   axios({
  //     url: "http://localhost:3030/initProduct"
  //   }).then(res => {
  //     if(res.status == 200) {
  //       setList([].splice.call(res.data,0,4))
  //     }
  //   })
  // }

  // useEffect(() => {
  //   initData();
  // },[])

  const [info,setInfo] = useState({
    title: "Detail Title",
    detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
  })
  return (
    <>
      <div className="App" style={{background: theme == 'light' ? 'white': 'black'}}>
        <Header></Header>
        {/* <CardList cardList={list}/> */}
        <h3 className="hotTitle">In-Store Hot Product.</h3>
        <CardList cardList={list}/>
        <Information info={info}/>
        <Sitemap></Sitemap>
      </div>
      <Footer/>
    </>
  );
}


export default App;

