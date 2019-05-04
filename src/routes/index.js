const {Router} = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/graphs', (req, res)=>{
    res.send('Aquí irán las gráficas')
})

module.exports = router