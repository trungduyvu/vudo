import express from 'express'
import serverless from 'serverless-http'

const app = express()

app.get('/api/v1', (req, res) => {
    res.send('hello world test')
})

module.exports.handler = serverless(app)
