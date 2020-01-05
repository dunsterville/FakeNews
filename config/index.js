module.exports = require('mongoose')
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
