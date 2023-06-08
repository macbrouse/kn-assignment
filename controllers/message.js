const messages = require('../models/messages')

module.exports = {
    send: (req, res) => {

        const accountSid = 'ACcd530eed6e0408d1e95e80fab6e300d3';
        const authToken = 'ac3e80515632bc4338868a509541e940';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: req.body.body,
                messagingServiceSid: 'MG06dcee71ba92bcb28a7f53dd74fe64e8',
                to: '+919582411305'
            })
            .then(message => console.log(message.sid)).done();

        res.send('Message Sent')
    },
    sent: async (req, res) => {

        const accountSid = 'ACcd530eed6e0408d1e95e80fab6e300d3';
        const authToken = 'ac3e80515632bc4338868a509541e940';
        const client = require('twilio')(accountSid, authToken);

        const response = await client.messages.list()
        res.send(response)

    }
}