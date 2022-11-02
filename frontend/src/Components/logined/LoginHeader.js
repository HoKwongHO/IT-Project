import React from 'react';
import './Header.css';
import Icon from '../../Asset/Icon.png'
import { Button, Link} from '@material-ui/core';
import SearchBox from '../SeachBox';
import Headertab from '../HeaderTab/Index'
import { useThemeContext } from '../../ThemeContext/ThemContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Brightness4Icon from '@material-ui/icons/Brightness4';



export default function Header() {
  const {toggle} = useThemeContext();
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
            <Button href='/'>Logout</Button></div>
    </div>
  )
}