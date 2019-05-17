const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/aprobacion',{
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('DB connected'))
    .catch(e => console.error(e))