import React from 'react'
import Header from '../Components/logined/StaffLoginHeader'
import Footer from '../Components/Footer'
import './index.css'
import { useLocation } from 'react-router'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { Button, Link } from '@material-ui/core'


function ProductDetail(props) {
    const { search } = useLocation();
    // const [id,setId] = useState("");
    const [info,setInfo] = useState({});
    const [id, setId] = useState({});

    const initProductInfo = async () => {
        axios.get(`/all-product/productInfo/${ search.split('?id=')[1]}`).then(res => {
            setInfo(res.data)
            setId(res.data._id)
        })
    }

    const addItemToCart = async () => {
        const res = await fetch(`/all-product/productInfo/${ search.split('?id=')[1]}` , { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ _id: id})});
        const data = await res.json();
        console.log('Add item to Cart success',data);
        window.location = '/cart'; //跳转至cart， cart data已经传到前端
    }
    useEffect(() => {
        initProductInfo();
    })
    return (
        <>
            <Header />
            <div className="detailWrapper">
                <div className="imgWrapper-d">
                    <img src={info.picture} alt="" />
                </div>
                <div className="info-d">
                    <h1>Name: {info.name}</h1>
                    <p className="detail"> Price: $ {info.price}</p>
                    <p className='detail'> Description: {info.description}</p>
                    <br></br>
                    
                    <Button variant="contained" color="secondary" onClick={addItemToCart}>
                        Save To Favorites Cart
                    </Button>
                    
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail