const { Note } = require('../models')

module.exports = app => {

  // Get all notes
  app.get('/notes', (req, res) => {
    Note.find()
      .populate('articles')
      .then(notes => res.json(notes))
      .catch(err => console.error(err))
  })

  // Post on notes
  app.post('/notes', (req, res) => {
    Note.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  app.delete('/notes/:id', (req, res) => {
    Note.findOneAndDelete({ __id: parseInt(req.params.id) }, function (err) {
      if (err) {
        console.log(err)
        return res.sendStatus(500).send()
      }
      return res.sendStatus(200).send()
    }
    )

  })
}