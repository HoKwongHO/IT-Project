import React, { useState,useEffect } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import './submit.css'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  root2: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
})); 

function Login() {
  const classes = useStyles();
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [imgUri,setUri] = useState("");
  const [file,setFile] = useState({})
  const [data,setData] = useState({});
  const [visible,setVisible] = useState(false)
  const tabs = ["Product Name","Product Price","Product Type","Product Storage","Product View"]
  const clearForm = () => {
    setName("");
    setUri("");
    setPrice("");
  }
  const confirmCreate = async (e) => {
    if(!name || !imgUri || !price) {
      return;
    }
    axios({
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        url: "http://localhost:3030/addProduct",
        data: JSON.stringify({
          name,
          imgUri,
          price
        })
    }).then(res => {
      if(res.status == 200) {
        setData(prev => ([...prev,{name,imgUri,price}]))
        clearForm();
        setVisible(false)
      }
    })
    // const res = await fetch("http://localhost:3030/addProduct", { method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({ name, price }) });
    // const data = await res.json();
    // console.log(data);
  };

  useEffect(() => {
    initData();
  },[])

  const handleImageUpload = (e) => {
    const file = e.target.files[0] || false
    if(file) {
      getImgUri(file);
    }
  }

  const handleCreate = () => {
    setVisible(!visible)
  }

  const getImgUri = (file) => {
    if(!file) {
        alert("img null")
        return;
    }
    const fd = new FormData();
    fd.append("upload",file)
    axios({
        method: "POST",
        headers: {
            "Content-type": "multipart/form-data"
        },
        data: fd,
        url: "http://localhost:3030/upload"
    }).then(res => {
      if(res.status == 200) {
        setUri(res.data.url)
      }
        console.log(res)
    }).catch(e => {
        console.log("load eror",e)
    })
  }
  
  const handleName = (e) => {
    setName(e.target.value);
  };

  const initData = () => {
    axios({
      url: "http://localhost:3030/initProduct"
    }).then(res => {
      console.log("products",res)
      if(res.status == 200) {
        setData(res.data);
      }
    })
  }

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return ( 
    <div className='adminWrapper'>
      <Header></Header>
      <div className="prodWrapper relative">
        <span className='addBtn' onClick={handleCreate}>Add Product</span>
        {/* title */}
        <h3>Product List</h3>
        <div className="headerTab">
          {tabs.map(((item,index) => (<div className="tabItem" key={index}>{item}</div>)))}
        </div>
        { data.length > 0 && data.map((item,index) => {
          return (
            <div className="productItem" key={index}>
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Price: {item.price}</div>
              <div>Price: {item.price}</div>
              <div className="itemImg">
                <img src={item.picture}/>
              </div>
            </div>
          )
        }) }
      </div>
      {/* <form className={classes.form} noValidate>
      </form> */}
        {visible && <div className='loginWrapper'>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Product Name"
              name="name"
              // autoComplete="email"
              autoFocus
              onChange={handleName}
            />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
              // autoComplete="current-password"
              onChange={handlePrice}
            />
            {/* upload image */}
            <div className={classes.root2}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          onChange={handleImageUpload}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      {imgUri && <div><img style={{ height: '100px',width: '100px',borderRadius: 15 }} src={imgUri}/></div>}
          <Button variant="contained" color="primary" onClick={confirmCreate}>
            Submit
          </Button>
        </div>}
    </div>
  );
}

export default Login;

