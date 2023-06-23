const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema ({
    title: {
        type : String
    },
    description: {
        type : String
    },
    contact: {
        type : String
    },
    date: {
        type: Date,
        default:Date.now
    }
    
},{
    collection: "tickets"

})

module.exports = mongoose.model('Ticket', ticketSchema);