import express from 'express'

const app = express()

app.get('/api/v1', (req, res) => {
    res.send('hello world test')
})

module.exports = app
