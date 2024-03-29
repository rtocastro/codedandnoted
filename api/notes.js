const express = require('express')
const router = require('express').Router();
const fs = require("fs")
const { v4: uuidv4 } = require('uuid')
const db = require('../db/db.json')

const newUuid = uuidv4();

//retrieve for data json
router.get('/notes', (req, res) => {
    res.json(db)
})


router.post('/notes', (req, res) => {

    req.body.id = uuidv4()

    db.push(req.body)

    fs.writeFile('../db/db.json', JSON.stringify(db), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`))
        console.log(db)
        res.json("success")

})

router.delete('/notes/:id', (req, res) => {

    var oldData = fs.readFileSync("./db/db.json", "utf8");

    const delDb = db.filter((note) =>
    note.id !== req.params.id)

    fs.writeFileSync('db/db.json', JSON.stringify(delDb))
    res.json(delDb)
});



// router.delete('/notes/:id', (req, res) => {

//     const oldData = fs.readFileSync("./db/db.json", "utf8");
//     const parsedData = JSON.parse(oldData);
//     const delDb = parsedData.filter((note) => note.id !== req.params.id);

//     fs.writeFileSync('./db/db.json', JSON.stringify(delDb));


//     res.json(delDb);
// });

module.exports = router;