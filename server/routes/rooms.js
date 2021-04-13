const router = require('express').Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator')


//contains all crud - all private routes that are protected
//room model

const Room = require('../models/Room.js');

router.get('/', auth, async (req,res) => {  
try {
    // const rooms = await Room.find()
    // const rooms = await Room.find({user: req.user.id})
    const rooms = await Room.find({ $or:[ {user: req.user.id}, {type:'Public'}]})
    res.json(rooms)
    } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
}
})

router.post('/', auth,
[
check('name', 'Please provide name').not().isEmpty(),
check('type', 'Please provide a phone').not().isEmpty()
],
async (req,res) => {
const errors = validationResult(req)
if(!errors.isEmpty()) {
    return res.status(400).json({error:errors.array()})

} 
const { name, type } = req.body
 try {
        let room = new Room({
            user:req.user.id,
            name,
            type
        })
        room = await room.save()
        res.json(room)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.delete ('/:id', auth, async (req,res) => {
try {
    let room = await Room.findById(req.params.id);
    if (!room) {
        return res.status(404).json({msg: 'Room Not Found'})
    }
    await Room.findByIdAndRemove(req.params.id)
    res.send('room removed')
    
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
}
})

/* router.put('/:id', auth, async (req,res) => {
    const {name, phone, dietary, isconfirmed} = req.body
    const updatedRoom = {name, phone, dietary, isconfirmed}
    try {
        let Room = await Room.findById(req.params.id)
        if (!room) {
            return res.status(404).json({msg: 'Room not found'})
        }
        room = await Room.findByIdAndUpdate(req.params.id, {$set : updatedRoom}, {new: true})
        res.send(room)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server crashed')
    }
}) */

router.put('/:id', auth, async (req,res) => {

    const {name, type} = req.body
    const updatedRoom = {name, type}

    try {
        let room = await Room.findById(req.params.id)
        if(!room) {
            return res.status(404).json({msg : 'Room not found'})
        } else {
            room = await Room.findByIdAndUpdate(req.params.id, {$set: updatedRoom}, {new:true})
            res.send(room)
        }


    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')

    }

})

module.exports = router