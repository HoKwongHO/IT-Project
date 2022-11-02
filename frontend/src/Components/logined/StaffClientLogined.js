import '../../App.css';
import React,{ useState,useEffect } from 'react';
import Header from './StaffLoginHeader';
import CardList from '../CarList/CardList';
import Information from '../Information';
import Footer from '../Footer';
import { useThemeContext } from '../../ThemeContext/ThemContext';
import Sitemap from '../../sitemap';


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
    title: "Detail Title",
    detail: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
  })
  return (
    <>
      <div className="App" style={{background: theme === 'light' ? 'white': 'black'}}>
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