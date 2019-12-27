const { Note } = require('../models')

module.exports = app => {

  // Get all notes
  app.get('/notes', (req,res) => {
    Note.find()
      .populate('articles')
      .then(notes => res.json(notes))
      .catch(err => console.error(err))
  })

  // Post on notes
  app.post('./notes', (req,res) => {
    Note.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })
}