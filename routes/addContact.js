const Router = require('express').Router()
const Contact=require('../controllers/contact')

Router.post('/',Contact.add)

module.exports = Router