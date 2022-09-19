import React from 'react';
import './Header.css';
import Icon from '../Asset/Icon.png'
import { Button, InputBase} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (

    <div className='head'>
        <div className='imgBox'><img src = {Icon} alt = 'No img here'></img></div>
        <h1>11111</h1>
        <div className= 'search'>
            <div className= 'searchIcon'>
                <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: 'inputRoot',
                input: 'inputInput',
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <div className='logRegister'>
            <Button href='/login'>Sign In</Button>
            <Button>Sign Up</Button></div>
    </div>
  )
}

<div className='Box'>
    <button href=''></button>
    jjjjj
    jjjj
</div>