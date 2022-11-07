import React from 'react';
import './Header.css';
import Icon from '../../Asset/Icon.png'
import { Button, Link} from '@material-ui/core';
import SearchBox from '../SeachBox';
import Headertab from '../HeaderTab/Index'
import { useThemeContext } from '../../ThemeContext/ThemContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {useCookies} from 'react-cookie';


export default function Header() {
  const {toggle} = useThemeContext();
  const [cookie, removeCookie] = useCookies(["login"]);
  
  const logoutBtn = async () => {
    if (cookie === undefined) {
      return;
    }

    // Frontend
    removeCookie("login");

    // Backend
    await fetch("/logout", { method: "POST", headers: { "Content-type": "application/json" } });
    window.location = '/customerlogin';
  }
  return (
    <div className='head'>
        <a href='/ClientLogined' style={{display: "block", height: "100%"}}><div className='imgBox'><img src = {Icon} alt = 'No img here'></img></div></a>
        
        <div style={{display: 'flex',height: '100%',padding: '10px',width: '600px'}}>
          <Headertab/>
          <SearchBox/>
        </div>
        <div className='logRegister'>
            <Link href='/cart'>
              <ShoppingCartIcon ></ShoppingCartIcon>
            </Link>
            <Brightness4Icon onClick={toggle}></Brightness4Icon>
            <Button onClick={logoutBtn}>Logout</Button></div>
    </div>
  )
}