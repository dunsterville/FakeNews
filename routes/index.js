module.exports = app => {
  require('./articleRoutes.js')(app)
  require('./noteRoutes.js')(app)
}