const express = require('express')
const app = express()

const connectDB = require('../server/config/db')
//connect to database
connectDB()

app.use(express.json({ extended: true }))

app.use('/register', require('./routes/register'))
app.use('test', require('./routes/test'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))