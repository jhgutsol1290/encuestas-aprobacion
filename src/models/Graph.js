const {Schema, model} = require('mongoose')

const graphSchema = new Schema({
    encuestadora: {type: String},
    numero: {type: Number},
    created_at: {type: Date, default: Date.now()}
})




module.exports = model('Graph', graphSchema)
