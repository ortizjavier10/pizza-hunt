const { Schema, model } = require('mongoose');

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema)

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createAt: {
        tyep: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// export the Pizza model
module.exports = Pizza;