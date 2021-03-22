const express = require('express')
const app = express()
const cors = require('cors');

const connectDB = require('../server/config/db')
//connect to database
connectDB()

app.use(express.json({ extended: true }))

app.use('/register', require('./routes/register'))
app.use('test', require('./routes/test'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guests'))
app.use(cors());


const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))