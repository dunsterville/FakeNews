const { model, Schema } = require('mongoose')

const Article = require('./Article')(model, Schema)
const Note = require('./Note')(model, Schema)


module.exports = { Article, Note }