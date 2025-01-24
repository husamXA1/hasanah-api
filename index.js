const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

const quranRouter = require('./routes/quran')
app.use("/quran", quranRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})