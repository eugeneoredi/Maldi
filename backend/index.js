const express = require('express')
const cors    = require('cors')
const helmet  = require('helmet')
const morgan  = require('morgan')
require('dotenv').config()

const experiencesRouter    = require('./routes/experiences')
const accommodationsRouter = require('./routes/accommodations')
const adminRouter          = require('./routes/admin')

const app  = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/experiences', experiencesRouter)
app.use('/api/accommodations', accommodationsRouter)
app.use('/api/admin', adminRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
