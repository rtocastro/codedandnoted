const router = require('express').Router();
const db = require('../db/db.json')
const fs = require("fs")

// retreive the data from the db.json
router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {

    db.push(req.body)

    fs.writeFile('../db/db.json', JSON.stringify(db), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`))

    res.json("success")

})

module.exports = router;