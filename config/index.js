module.exports = require('mongoose')
  .connect('mongodb://localhost/goosedb', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
