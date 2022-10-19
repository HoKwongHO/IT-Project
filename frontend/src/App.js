import './App.css';
import React,{ useState,useEffect } from 'react';
import Header from './Components/Header';
import CardList from './Components/CarList/CardList';
import Information from './Components/Information';
import Footer from './Components/Footer';
import { useThemeContext } from './ThemeContext/ThemContext';
import Sitemap from './sitemap';


function App() {
  const { theme } = useThemeContext();
  const [list,setList] = useState([]);

  useEffect(() => {
    fetch("/all-product")
        .then((res) => res.json())
        .then((jsonRes) => setList(jsonRes));
}, []);   

  // const toDetail = () => {
    
  // }
//setinfo
  const [info] = useState({
    title: "Announcement",
    detail: "Our website will be closed between 1 p.m. to 3p.m on 10/18/2022, due to the maintainise action, sorry for the inconvinence"
  })
  return (
    <>
      <div className="App" style={{background: theme === 'light' ? 'rgba(207, 207, 207, 0.861)': 'black'}}>
        <Header></Header>
        {/* <CardList cardList={list}/> */}
        <h3 className="hotTitle">In-Store Hot Product.</h3>
        <CardList cardList={list} num={4}/>
        <Information info={info}/>
        <Sitemap></Sitemap>
      </div>
      <Footer/>
    </>
  );
}


export default App;

