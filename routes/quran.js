const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get("/", (req, res) => {
    fs.readFile(`${__dirname}/quran.json`, "utf8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(JSON.parse(data))
        }
    })
})

module.exports = router