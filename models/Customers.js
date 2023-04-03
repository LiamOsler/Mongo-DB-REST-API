const mongoose = require("mongoose")

const schema = mongoose.Schema({
	username: String,
	name: String,
    address: String,
    birthdate: Date,
    email: String,
    accounts: [Number]
}, 
{ strict: true }
)

schema.index({username: 'text', 'name': 'text', address: 'text', email: 'text'});

module.exports = mongoose.model("customers", schema)