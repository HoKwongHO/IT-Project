import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

// const searchbtn = async() => {
//   const res = await fetch("http://localhost:3030//searching" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({payload: e.value})});
//   const data = await res.json();
//   console.log(data);
// };

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="Search Database"
        inputProps={{ 'aria-label': 'search Databse' }}
      />

      {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton> */}
       <IconButton href='/Search'>
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}
