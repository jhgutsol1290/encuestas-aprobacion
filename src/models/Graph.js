const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const graphSchema = new Schema({
    encuestadora: {type: String},
    numero: {type: Number},
    created_at: {type: Date, default: Date.now()}
})



graphSchema.plugin(AutoIncrement, {id: 'order_seq', inc_field: 'numero'})
module.exports = model('Graph', graphSchema)
