const Router = require('express').Router()
const Message = require('../controllers/message')

Router.post('/',Message.send)

module.exports = Router