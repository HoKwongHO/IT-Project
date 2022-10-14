const cartRepository = require("./cartRepository")
const Product = require("../models/productModel")


const createCart = async(req, res) => {
    try{
        let payload = {
            customer: req.session.userID,
            item:{}
        }
        let cart = await cartRepository.createCart({...payload})
        res.status(200).json({
            status: true,
            data: cart,
        })

    }catch(err){
        console.log(err)
        console.log("error: create Cart in cartController.js")
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

const fetchCart = async(req, res) => {
    try{
        const cart = await cartRepository.getCart(req.params._id) 
        // If there is no cart, then create a new one
        if (!cart){
            res.status(400).json({
                type: "Invalid",
                msg: "Cart Not Found"
            })
        }
        res.status(200).json({
            status: true,
            data: cart
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            error: err,
            msg: "Something went wrong"
        })
    }
}

const addItemToCart = async(req, res) => {
    const {customerId} = req.params._id
    try{
        let payload = {
            productId: req.body._id
        }
        let productDetail = await Product.findById(productId) 
        if (!productDetail){
            res.status(500).json({
                type: "Not Found",
                msg: "Invalid Request"
        })
        }
        let cart = await cartRepository.addItem(payload, customerId)
        res.status(200).json({
            type: "success",
            msg: "Add Item To Cart Successfully!",
            data: cart
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            error: err,
            msg: "Something went wrong"
        })
    }
}

const removeItemFromCart = async(req, res) => {
    const {customerId} = req.params._id
    const {productId} = req.body_id
    try{
        let cart = await cartRepository.removeItem(productId, customerId)
        res.status(200).json({
            type: "success",
            msg: "Remove Item From Cart Successfully!",
            data: cart
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            error: err,
            msg: "Something went wrong"
        })
    }
}

module.exports = {
    createCart,
    fetchCart,
    addItemToCart,
    removeItemFromCart
}