const Router = require('express').Router()
const Message = require('../controllers/message')

Router.get('/',Message.sent)

module.exports = Router