const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
})

const Pizza = mongoose.model('pizzas', pizzaSchema)

module.exports = Pizza