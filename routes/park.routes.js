const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')

// Aquí los endpoints
router.get('/new', (req, res) => {
    res.render('../views/parks/new-park.hbs')
})

router.post('/new', (req, res) => {
    const{name, description} = req.body


    Park.create({name, description, active: true})
        .then(newPark => res.json(newPark))
        .catch(err => console.log('err en BBDD', err))
 })


module.exports = router