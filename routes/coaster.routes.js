const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

// Aquí los endpoints

//7
router.get('/new', (req, res) => {
    res.render('../views/coasters/new-coaster.hbs')
})


//1
router.post('/new', (req, res) => {
    const { name, description, inversions, length } = req.body
    
    Coaster.create({ name, description, inversions, length, active: true })
        .then(newCoaster => res.json(newCoaster))
        .catch(err => console.log('err en Coasters', err))
})


//11 
router.get('/', (req, res) => {

    Coaster.find()
        .then(allCoasters => res.render('../views/coasters/coasters-index.hbs', {allCoasters}))
        .catch(err => console.log('err en Coasters', err))
})

//12-13 DETALLES
router.get('/:id', (req, res) => {
    
    
    Coaster
        .findById(req.params.id)
        .then(theCoaster => res.render('../views/coasters/coaster-details.hbs', theCoaster))
        .catch(err => console.log('err en la id', err))
})

//RUTA 7
router.get('/coasters/delete?id=xxx', (req, res) => {
    
    Coaster
    .findByIdAndRemove(req.query.id)
    .then(() => res.redirect('/coasters'))
    .catch(err => console.log('err en la BBDD', err))
})

module.exports = router