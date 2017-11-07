import express from 'express'
import isProd from '../shared/util'

const app = express()

app.get('/api/v1', (req, res) => {
    res.send('hello world test')
})

module.exports = app

// if (isProd) {
//     module.exports = app
// } else {
//     app.listen(3030, () => {
//         eslint-disable-next-line no-console
        // console.log(`Server running on port 3030`)
    // })
// }
