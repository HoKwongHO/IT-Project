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
    const [info,setInfo] = useState({})

    const initProductInfo = async () => {
        axios.get(`/all-product/productInfo/${ search.split('?id=')[1]}`).then(res => {
            setInfo(res.data)
        })
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
                    <Link href='/ClientLogined'>
                    <Button variant="contained" color="secondary">
                        Purchase
                    </Button>
                    </Link>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail