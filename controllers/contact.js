const Contacts=require('../models/contacts')

module.exports = {
    get:async(req,res)=>{
        const contact= await Contacts.find()
        res.send(contact)
        
    },
    add:async(req,res)=>{
        const firstName=req.body.firstName;
        const lastName=req.body.lastName;
        const Phone=req.body.phone;

        const contact= await Contacts.create({
            firstName,lastName,Phone
        });
        await contact.save();

        res.send(contact);
    }
}