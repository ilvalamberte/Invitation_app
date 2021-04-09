const router = require('express').Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator')


//contains all crud - all private routes that are protected
//guest model

const Guest = require('../models/Guest.js');

router.get('/', auth, async (req,res) => {  
try {
    const guests = await Guest.find()
    res.json(guests)
    } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
}
})

router.post('/', auth,
[
check('name', 'Please provide name').not().isEmpty(),
check('phone', 'Please provide a phone').not().isEmpty()
],
async (req,res) => {
const errors = validationResult(req)
if(!errors.isEmpty()) {
    return res.status(400).json({error:errors.array()})

} 
const { name, phone, dietary, isconfirmed } = req.body
 try {
        let guest = new Guest({
            user:req.user.id,
            name,
            phone,
            dietary,
            isconfirmed
        })
        guest = await guest.save()
        res.json(guest)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.delete ('/:id', auth, async (req,res) => {
try {
    let guest = await Guest.findById(req.params.id);
    if (!guest) {
        return res.status(404).json({msg: 'Guest Not Found'})
    }
    await Guest.findByIdAndRemove(req.params.id)
    res.send('guest removed')
    
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
}
})

/* router.put('/:id', auth, async (req,res) => {
    const {name, phone, dietary, isconfirmed} = req.body
    const updatedGuest = {name, phone, dietary, isconfirmed}
    try {
        let Guest = await Guest.findById(req.params.id)
        if (!guest) {
            return res.status(404).json({msg: 'Guest not found'})
        }
        guest = await Guest.findByIdAndUpdate(req.params.id, {$set : updatedGuest}, {new: true})
        res.send(guest)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server crashed')
    }
}) */

router.put('/:id', auth, async (req,res) => {

    const {name, phone, dietary, isconfirmed} = req.body
    const updatedGuest = {name, phone, dietary, isconfirmed}

    try {
        let guest = await Guest.findById(req.params.id)
        if(!guest) {
            return res.status(404).json({msg : 'Guest not found'})
        } else {
            guest = await Guest.findByIdAndUpdate(req.params.id, {$set: updatedGuest}, {new:true})
            res.send(guest)
        }


    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')

    }

})

module.exports = router