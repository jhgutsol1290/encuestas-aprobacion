const {Router} = require('express')
const router = Router()

const Graph = require('../models/Graph')
const Values = require('../models/Values')

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/graphs', async (req, res)=>{
    await Graph.aggregate([
        {
            $lookup:
                {
                    from: "values",
                    localField: "numero",
                    foreignField: "numero",
                    as: "NuevaTabla"
                }
        }
    ]).exec(function(err, data){
        if(err)
            throw err;
        
            console.log(JSON.stringify(data))
            var newData = JSON.stringify(data)
            res.render('graphs', {newData})
    })
})

router.get('/upload', (req, res)=>{
    res.render('upload')
})


router.post('/upload', async (req, res)=>{

    //const graph = new Graph()
    const values = new Values()
    //graph.encuestadora = req.body.encuestadora
    //graph.numero = req.body.numero

    values.publicado = req.body.publicado
    values.porcentaje = req.body.porcentaje
    values.numero = req.body.numero

    //await graph.save()
    await values.save()
    res.redirect('/graphs')
})

router.get('/encuestadora/upload', (req, res)=>{
    res.render('uploadEnc')
})

router.post('/encuestadora/upload', async(req, res)=>{
    const graph = new Graph()
    graph.encuestadora = req.body.encuestadora
    graph.numero = req.body.numero

    await graph.save()
    res.redirect('/graphs')
})

module.exports = router