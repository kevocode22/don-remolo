const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema ({
    idPizza: {type:mongoose.Types.ObjectId, ref:'pizzas'},
    idUser: {type:mongoose.Types.ObjectId, ref:'users'},
    quantity: {type:Number},
    date: {
        reserved: {type:Date},
        saled: {type:Date},
        send: {type:Date}
    },
    stateOfBuy: {type:String}
})

const Cart = mongoose.model('shoppingCart',cartSchema)
module.exports = Cart