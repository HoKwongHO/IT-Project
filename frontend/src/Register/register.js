import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
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
//islogin
  const registerbtn = async() => {
    const res = await fetch("/register" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({nickname, email, password})});
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
    
    <div className='wrapper1'>
      <Header></Header>
      <form className={classes.form} noValidate>
      <div className = 'loginWrapper'>
        <h4>Enter Your Nickname: </h4>
         <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="nickname"
            label="Nick name"
            name="nickname"
            // autoComplete="nickname"
            autoFocus
            onChange={handleNickname}
          />
      <h4>Enter Your Email: </h4>
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
        <h4>Enter Your Password: </h4>
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
        <br></br>
        <p className='hint'> Your email format should be: xxxx@xxx.xx</p>
        <br></br>
        <p className='hint'> Your password should be between 5 and 10 characters</p>
        <br></br>
        <Button variant="contained" color="primary" onClick={registerbtn}>
          Register Here!
        </Button>
      </div>
      </form>

    </div>

  );
}




export default Register;

