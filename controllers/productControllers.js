const Pizza = require('../models/pizzas')

const pizzasControllers = {
	getPizzas: async(req,res)=>{
		let pizzas
		let error = null
		try {
			pizzas = await Pizza.find()
		} catch (err) {error = err
		console.error(error)}
		res.json({
			response: error ? 'ERROR' : {pizzas},
			success: error ? false : true,
			error: error
		})
	},

	getOnePizza: async(req,res)=>{
		const id = req.params.id
		let pizzas
		let error = null
		try {
			pizzas = await Pizza.findOne({_id: id})
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : pizzas,
			success: error ? false : true,
			error: error
		})

	},
	
	addPizza: async(req,res)=>{
		const {name, price, description, image} = req.body.data
		let pizza
		let error = null
		try{
			pizza = await new Pizza({
				name:name,
				price:price,
				description:description,
				image:image,
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : pizza,
			success: error ? false : true,
			error: error
		})

	},
	modifyPizza: async(req,res)=>{
		const id = req.params.id
		const pizza = req.body.data
		let pizzaDb
		let error = null
		try{
			pizzaDb = await Pizza.findOneAndUpdate({_id:id},pizza,{new: true})
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : pizzaDb,
			success: error ? false : true,
			error: error
		})
	},
	removePizza: async(req,res)=>{
		const id = req.params.id
		let pizza
		let error = null
		try{
			pizza = await Pizza.findOneAndDelete({_id: id})
		}catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : pizza,
			success: error ? false : true,
			error: error
		})

	}

}
module.exports = pizzasControllers