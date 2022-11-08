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
import { useEffect,useState } from 'react';
import Card from './Components/Card/Card';

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

export default function Sample(props) {
  const classes = useStyles();
  const [products, setProducts] = useState({})

  const getCart = async () => {
      fetch("/collection-cart/")
      .then((res) => res.json())
      .then((jsonRes) => setProducts(jsonRes));
  }


  useEffect(() => {
      getCart();
  })

  const Data = Array.from(products);

  return (
    <div>
      <Header></Header>
      <div className='list'>
      <List className={classes.root}>
      <h1>Favourites Cart</h1>
       <ul>{Data.map((item) => (
                <Card info={item} key={item._id}/>
                
        ))}
        </ul>
      </List>
      
      </div>
      

    </div>
    
  );
}