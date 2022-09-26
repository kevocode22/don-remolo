const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const userControllers = require('../controllers/userControllers');
const { register, login, verifyToken, verifyMail } = userControllers

const productControllers = require('../controllers/productControllers');
const { getPizzas, addPizza, removePizza, modifyPizza, getOnePizza } = productControllers

const buyControllers = require('../controllers/buyControllers');
const { addProduct, getUserProducts, modifyProduct, deleteProduct, getOneProduct } = buyControllers


Router.route('/register')
    .post(validator, register)

Router.route('/login')
    .post(login)

Router.route('/verifytoken')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)

Router.route('/verify/:string')
    .get(verifyMail)

Router.route('/products')
    .get(getPizzas)
    .post(addPizza)

Router.route('/products/:id')
    .delete(removePizza)
    .get(getOnePizza)
    .put(modifyPizza)

Router.route('/cart')
    .post(passport.authenticate('jwt', { session: false }), addProduct)
    .get(passport.authenticate('jwt', { session: false }), getUserProducts)
    .put(passport.authenticate('jwt', { session: false }), modifyProduct)

Router.route("/cart/:id")
    .get(passport.authenticate('jwt', { session: false }), getOneProduct)
    .delete(passport.authenticate('jwt', { session: false }), deleteProduct)


module.exports = Router
