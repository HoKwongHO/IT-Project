import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './submit.css'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/logined/StaffLoginHeader';
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
  const [product, setProduct] = useState({
    name: "",
    price: "",
    storage: "",
    imgUri: "",
    catogory: "",
    description: "",
  })
  const [data, setData] = useState({});
  const [visible, setVisible] = useState(false)
  const tabs = ["Product Name", "Product Price", "Product Type", "Product Storage", "Product View"]
  const clearForm = () => {
    setProduct({
      name: "",
      price: "",
      picture: "",
      storage: "",
      imgUri: "",
      catogory: "",
      description: "",
    })
  }

  const isEmptyProp = () => {
    var bool = true;
    Object.keys(product).forEach(key => {
      if(!product[key]) 
        bool = false;
    })
    return bool
  }

  const handleChange = (value, name) => {
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  const confirmCreate = async (e) => {
    if(isEmptyProp()) {
      return;
    }
    axios({
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      url: "/addProduct",
      data: JSON.stringify(product)
    }).then(res => {
      if (res.status === 200) {
        clearForm();
        setVisible(false)
      }
    })
  };

    useEffect(() => {
        fetch("/all-product")
            .then((res) => res.json())
            .then((jsonRes) => setData(jsonRes));
    }, []);    

  const handleImageUpload = (e) => {
    const file = e.target.files[0] || false
    if (file) {
      getImgUri(file);
    }
  }

  const handleCreate = () => {
    setVisible(!visible)
  }

  const getImgUri = (file) => {
    if (!file) {
      alert("img null")
      return;
    }
    const fd = new FormData();
    fd.append("upload", file)
    axios({
      method: "POST",
      headers: {
        "Content-type": "multipart/form-data"
      },
      data: fd,
      url: "/upload"
    }).then(res => {
      if (res.status === 200) {
        handleChange(res.data.url,'imgUri')
      }
    }).catch(e => {
      console.log("load eror", e)
    })
  }

  // const initData = () => {
  //   axios({
  //     url: "http://localhost:3030/product/init"
  //   }).then(res => {
  //     console.log("products", res)
  //     if (res.status === 200) {
  //       setData(res.data);
  //     }
  //   })
  // }

  return (
    <div className='adminWrapper'>
      <Header></Header>
      <div className="prodWrapper relative">
        <span className='addBtn' onClick={handleCreate}>Add Product</span>
        {/* title */}
        <h3>Product List</h3>
        <div className="headerTab">
          {tabs.map(((item, index) => (<div className="tabItem" key={index}>{item}</div>)))}
        </div>
        {data.length > 0 && data.map((item, index) => {
          return (
            <div className="productItem" key={index}>
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Type: {item.catogory}</div>
              <div>Storage: {item.storage}</div>
              <div className="itemImg">
                <img alt= "img"src={item.picture} />
              </div>
            </div>
            
          )
        })}
      </div>
      {visible && <div className='editPanel'>
        <TextField
          required
          fullWidth
          label="Product Name"
          onChange={e => handleChange(e.target.value, 'name')}
        />
         <TextField
          required
          fullWidth
          label="Product Price"
          onChange={e => handleChange(e.target.value, 'price')}
        />
         <TextField
          required
          fullWidth
          label="Product Category"
          onChange={e => handleChange(e.target.value, 'catogory')}
        />
         <TextField
          required
          fullWidth
          label="Product Description"
          onChange={e => handleChange(e.target.value, 'description')}
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
        {product.imgUri && <div><img alt="img"style={{ height: '200px', width: '100%', borderRadius: 15 }} src={product.imgUri } /></div>}
        <Button variant="contained" color="primary" onClick={confirmCreate}>
          Submit
        </Button>
      </div>}
    </div>
  );
}
export default Login;

