require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

//user Model 
const User = require('../models/User')

router.get('/', auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json(user)
    } catch(err) { 
console.error(err.message);
res.status(500).send('Server Error')
    }
})

router.post('/',
[
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Password at least 6 character long').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const { email, password } = req.body
    try {
      // user already exits ?
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ error: [{ msg: 'invalid credentials' }] })
      }
      const match = await bcrypt.compare(password, user.password);

      if(!match) {
          return res.status(400).json({msg:'invalid'})
      }

      // sign a jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, process.env.SECRET, {
        expiresIn: 36000
      },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }
  })

module.exports = router
