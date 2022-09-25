import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import './register.css'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



function Register() {
  const classes = useStyles();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin,setLogin] = useState(true);

  const registerbtn = async() => {
    const res = await fetch("http://localhost:3030/register" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({nickname, email, password})});
    const data = await res.json();
    console.log(data);
  };


  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    
    <div className='wrapper'>
      <Header></Header>
      <form className={classes.form} noValidate>
      <div className = 'loginWrapper'>
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nickname"
            label="Nick name"
            name="nickname"
            // autoComplete="nickname"
            autoFocus
            onChange={handleNickname}
          />
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email asd"
            label="Email Address"
            name="email"
            // autoComplete="email"
            autoFocus
            onChange={handleEmail}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // autoComplete="current-password"
            onChange={handlePassword}
          />
        <Button variant="contained" color="primary" onClick={registerbtn}>
          Register
        </Button>
        <p onClick={() => {setLogin(true)}}>back to Login</p>
      </div>
      </form>

    </div>

  );
}




export default Register;

