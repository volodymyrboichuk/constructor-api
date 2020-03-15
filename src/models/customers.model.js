const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    _id: {type: mongoose.Types.ObjectId, required: true},
    name: {type: String, required: true, max: 100},
    createdAt: {type: Date, required: true},
    createdByUser: {type: mongoose.Types.ObjectId, required: true}
});

// Export the model
module.exports = mongoose.model('Customers', CustomersSchema);