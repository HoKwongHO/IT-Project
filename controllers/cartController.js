const Product = require("../models/productModel")
const Cart = require("../models/favouriteCart");
const Client = require("../models/customerModel");


const createCart = async (req, res) => {
    const {email } = req.body;

    // Find Customer by email
    const customer = await Client.findOne({"email": email});

    const payload = {customer: customer,
        items: []};

    try{
        new Cart(payload).save((err, cart)=> {
            res.status(200).json({msg:"Registered!", customer,  cart});
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
        console.log(req.session.passport.user._id)
        // find the cart by user_id
        const cart = await Cart.findOne({"customer": req.session.passport.user._id});
        // If there is no cart, then create a new one
        if (!cart){
            res.status(400).json({
                type: "Invalid",
                msg: "Cart Not Found"
            })
        }
        console.log("found")
        console.log(cart)
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
    const productId = req.body._id;
    const customerId = req.session.passport.user._id;

    try{
        // let payload = {
        //     productId: req.body._id
        // }
        let productDetail = await Product.findOne({_id : productId}) 
        console.log("11")
        if (!productDetail){
            console.log("22")
            res.status(500).json({
                type: "Not Found",
                msg: "Invalid Request"
            })
        }
        const cart = await Cart.findOne({customer: customerId});
        const items = cart.items;

        const itemExists = items.some((item) => item._id.toString() == productId)
        
        if (itemExists){
            res.status(500).json({
                type: "Product Existed",
                msg: "Invalid Request"
            })
        }else{
            cart.items.push(productId);
            await cart.save();
            res.status(200).json({
                type: "success",
                msg: "Add Item To Cart Successfully!",
                data: cart
            })
        }
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
    const customerId = req.session.passport.user._id
    const productId = req.body._id
    try{
        await Cart.findOneAndUpdate({customer: customerId}, {$pull: {items: {productId: productId}}});
        console.log("removed successfully!")
        const cart = await Cart.findOne({customer: customerId});
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