const router = require('express').Router()
const { Note, User } = require('../models')
const passport = require('passport')

router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.find({}).populate('user')
  res.json(notes)
})
router.get('/notes/user', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.find({user: req.user._id}).populate('user')
  res.json(notes)
})

router.get('/notes/:id', passport.authenticate('jwt'), (req, res) => {
  Note.findById(req.params.id).populate('user')
    .then(note => res.json(note))
    .catch(err => console.log(err))
})

router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { notes: note._id } })
  res.json(note)
})

router.put('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.findByIdAndUpdate(req.params.id, { $set: req.body })
  // await User.findByIdAndUpdate(req.user._id, { $push: { Notes: Note._id } })
  res.sendStatus(200)
})


router.delete('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  await Note.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router