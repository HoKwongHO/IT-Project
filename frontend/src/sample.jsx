// import { Container } from '@material-ui/core'
import React from 'react'
import Header from './Components/logined/LoginHeader'
import './sample.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    margin: '200px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Sample() {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div className='list'>
      <List className={classes.root}>
      <h1>Shopping Cart</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Apple" src="https://st2.depositphotos.com/7036298/10694/i/450/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Apple"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Qty: 1
              </Typography>
            </React.Fragment>
          }
          
        />
        <ListItemText primary="Total price: " secondary="$3.5" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Banana" src="https://media.istockphoto.com/photos/bananas-isolated-picture-id1400057530?b=1&k=20&m=1400057530&s=170667a&w=0&h=hGf8i_ocaU1nJC2gqgr-Vdnbny-PMfMmTrG6czmBzMQ=" />
        </ListItemAvatar>
        <ListItemText
          primary="Banana"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Qty: 2
              </Typography>
            </React.Fragment>
          }
          
        />
        <ListItemText primary="Total price: " secondary="$8" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ice Cream" src="https://img.freepik.com/premium-vector/realistic-soft-american-ice-cream-waffle-cone_8071-5377.jpg?w=2000" />
        </ListItemAvatar>
        <ListItemText
          primary="Ice Cream"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Qty: 1
              </Typography>
            </React.Fragment>
          }
          
        />
        <ListItemText primary="Total price: " secondary="$3" />
      </ListItem>
    </List>
      </div>

    </div>
    
  );
}