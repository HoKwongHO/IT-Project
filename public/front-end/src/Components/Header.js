import React from 'react';
import './Header.css';
import Icon from '../Asset/Icon.png'
import { Button, InputBase} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import SearchIcon from '@material-ui/icons/Search';
import SearchBox from './SeachBox';
import Headertab from './HeaderTab/Index'
import { useThemeContext } from '../ThemeContext/ThemContext';

export default function Header() {
  const {toggle} = useThemeContext();
  return (
    <div className='head'>
        <a href='/' style={{display: "block", height: "100%"}}><div className='imgBox'><img src = {Icon} alt = 'No img here'></img></div></a>
        
        <div style={{display: 'flex',height: '100%',padding: '10px',width: '600px'}}>
          <Headertab/>
          <SearchBox/>
        </div>
        <div className='logRegister'>
            <span onClick={toggle}>toggle</span>
            <Button href='/login'>Sign In</Button>
            <Button href='/register'>Sign Up</Button></div>
    </div>
  )
}

<div className='Box'>
    <button href=''></button>
    jjjjj
    jjjj
</div>