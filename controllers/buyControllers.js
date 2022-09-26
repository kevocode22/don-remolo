const Cart = require('../models/cart')


const buyControllers = {

    addProduct: async (req, res) => {
        console.log(req.body)
        const { idPizza } = req.body
        const idUser = req.user._id
        let quantity = 1
        try {
            let carritoExiste = await Cart.findOne({ idPizza, idUser })
           
            if (carritoExiste !== null) {
                console.log("CONSOLAAAAAAAA",carritoExiste)

                quantity = carritoExiste.quantity + 1
                console.log("QUANTITYYYYYYYYYYYYYYY:  "+ quantity)
                const shopping = await Cart.findOneAndUpdate({ idPizza, idUser }, {
                    $set: {
                        "quantity": quantity
                    }
                }, { new: true })
                res.json({
                    success: true,
                    response: { shopping },
                    message: "Tu compra ha sido actualizada"
                })
            }
            else {
                const shopping = await Cart({ idPizza, idUser, quantity }).save()
                res.json({
                    success: true,
                    response: { shopping },
                    message: "Producto añadido con éxito"
                })
                console.log(shopping)
            }
        }
        catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: "Perdón, no pudimos añadir el producto, intenta de vuelta 😞"
            })
        }
    },

    getUserProducts: async (req, res) => {
        const idUser = req.user._id
        let shopping;
        const error = null;
        try {
            shopping = await Cart.find({ idUser: idUser })
                .populate("idUser", { fullName: 1, email: 1 })
                .populate("idPizza", { name: 1, price: 1, image: 1, description: 1, quantity: 1 })
            console.log(shopping)
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { shopping },
            success: error ? false : true,
            error: error
        })
    },

    getOneProduct: async (req, res) => {
        //console.log(req.params.id)
        let product = req.params.id
        console.log(product)
        let idUser = req.user._id
        let shopping
        let error = null
        try {
            shopping = await Cart.find({ idUser: idUser, _id: product })
                .populate("idPack", { nombre: 1, precio: 1, imagen: 1 })
                .populate("idUsuario", { email: 1, nombre: 1 })
            console.log(shopping)
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : { shopping },
            success: error ? false : true,
            error: error
        })
    },

    deleteProduct: async (req, res) => {
        const idProduct = req.params.id
        console.log(idProduct)
        try {
            const respuesta = await Cart.findOneAndDelete({ _id: idProduct })
            res.json({
                success: true,
                message: "Eliminamos el producto 👍"
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                success: true,
                message: "Perdón, no se pudo eliminar el producto, intenta de vuelta 😞"
            })
        }
    },

    modifyProduct: async (req, res) => {
        const { userId, quantity } = req.body
        try {
            const modifyQuantity = await Cart.findOneAndUpdate({ "_id": userId, "quantity":quantity}, {
                }, { new: true })
            res.json({
                success: true,
                response: { modifyQuantity },
                message: "Tu compra se ha modificado"
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                success: true,
                message: "Perdón, no pudimos hacer la modificación"
            })
        }
    },

  


}
module.exports = buyControllers