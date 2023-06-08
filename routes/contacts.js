const Router = require('express').Router()
const Contact=require('../controllers/contact')

Router.get('/',Contact.get)

module.exports = Router