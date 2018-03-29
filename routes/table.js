const router = require('express').Router()
const database = require('../database/tableAPI')

router.get('/', (req, res) => {
    database.getTable()
        .then((table) => {
            res.send(table)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleTable(req.params.id).then((table) => {
        res.send(table)
    })
})

router.post('/', (req, res) => {
    database.createTable(req.body)
        .then((data) => {
            res.send(data)
        })
})

router.patch('/:id', (req, res) => {
    database.editTable(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteTable(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
