import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// const searchbtn = async() => {
//   const res = await fetch("http://localhost:3030//searching" ,{method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({payload: e.value})});
//   const data = await res.json();
//   console.log(data);
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
// }));

export default function CustomizedInputBase() {

  return (
    <IconButton href='/Search'>
        <SearchIcon />
      </IconButton>
    // <Paper component="form" className={classes.root}>

    //   <InputBase
    //     className={classes.input}
    //     placeholder="Search Database"
    //     inputProps={{ 'aria-label': 'search Databse' }}
    //   />

    //   {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
    //     <SearchIcon />
    //   </IconButton> */}
    //    <IconButton href='/Search'>
    //     <SearchIcon />
    //   </IconButton>

    // </Paper>
  );
}
