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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLogin,setLogin] = useState(true);
  const loginbtn = async () => {
    const res = await fetch("/stafflogin", { method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    console.log(data);
    window.location = '/demo';
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
      <h2>Log in as Staff</h2>
      <h3> Enter your email address: </h3>
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
        <h3> Enter your password: </h3>
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
        <br>
        </br>
        <p className='hint'>This log in page is for staff only! Click below link if you are customer.</p>
        <br />
        <a className="switch" href='/customerlogin'>Click Here!</a>
        <br />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Button variant="contained" color="primary" onClick={loginbtn}>
          Login
        </Button>
        
      </div>
      </form>
    </div>

  );
}




export default Login;