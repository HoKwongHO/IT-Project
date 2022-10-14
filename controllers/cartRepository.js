const Cart = require("../models/favouriteCart");

const getCart = async customerId => {
    // Find all the products from the specific customers' cart
    const carts = await Cart.find({customer: customerId}).populate('items')
    return carts

}

// Create a cart for a new customer
const createCart = async payload => {
    const newCart = await Cart.create(payload);
    return newCart

}

// Add unique item into the customer's cart
const addItem = async(payload, customerId) => {
    Cart.findOneAndUpdate(
        {customer: customerId},
        {$addToSet: {items: payload}}
    ), function(error, success){
        if(error){
            console.log(error)
        }else{
            console.log(success)
        }
    }

    const cart = await Cart.find(customerId)
    return cart

}

const removeItem = async(productId, customerId) => {
    // Look for the cart for the customer who has log in, and delete the selected product in the cart
    Cart.updateOne({customer: customerId}, {$pull: {products: {productId: productId}}}
        ), function(error, success){
            if(error){
                console.log(error)
            }else{
                console.log(success)
            }
        }

    const cart = await Cart.find(customerId)
    return cart

}

module.exports = {
    getCart,
    createCart,
    addItem,
    removeItem
}