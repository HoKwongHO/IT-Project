import React, { useState } from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import logo from './logo.svg';
// import './App.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginbtn = async() => {
    const res = await fetch("http://localhost:3030/register" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({email, password})});
    const data = await res.json();
    console.log(data);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  } ;

  const handlePassword = (e) => {
    setPassword(e.target.value);
  } ;
  return (
    <div className="Login">
      <input type= "text" value= {email} onChange = {handleEmail} placeholder="Email address"></input>
      <input type= "password" value= {password} onChange = {handlePassword}></input>
      <Button variant="contained" color="primary" onClick={loginbtn}>
        Register
      </Button>

    </div>
  );
}


export default Register;
