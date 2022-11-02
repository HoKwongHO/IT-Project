import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import './login.css'
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



function Login() {
  const classes = useStyles();
  // const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginbtn = async () => {
    const res = await fetch("/login", { method: "POST", headers: { "Content-type": "application/json" },  body: JSON.stringify({ email: email, password: password }) });
  
    const data = await res.json();
    console.log('login',data);
    window.location = '/ClientLogined';
    // if(data.msg === 'Welcome!') {
    //   window.location = '/';
    // }
  };
  // const registerbtn = async() => {
  //   const res = await fetch("http://localhost:3030/register" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({nickname, email, password})});
  //   const data = await res.json();
  //   console.log(data);
  // };

  // const handleNickname = (e) => {
  //   setNickname(e.target.value);
  // };

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
        <h3>Enter your email address: </h3>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // autoComplete="email"
            autoFocus
            onChange={handleEmail}
          />
        <h3>Enter your password: </h3>
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
        <p className='required'>* is required</p>
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Button variant="contained" color="primary" onClick={loginbtn}>
          Login
        </Button>
        <br></br>
        <a className='jump' href='/customerregister'>Do not have an account? Click here</a>
      </div>
      </form>
    </div>

  );
}




export default Login;

