const express = require('express')
const mongoose = require('mongoose')
const contacts = require('./routes/contacts')
const sendMessage = require('./routes/sendMessage')
const sentMessages = require('./routes/sentMessages')
const addContact = require('./routes/addContact')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/kisanDB')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

// API to add contacts
app.use('/contact/add',addContact)

// API to send message
app.use('/send',sendMessage)

// API to show all contacts
app.use('/contact',contacts)

// API to show all sent messages
app.use('/sent',sentMessages)


app.listen(3000,()=>{
    console.log('listening on port 3000')
})