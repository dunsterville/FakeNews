module.exports = (model, Schema) => {

  const Note = new Schema({
    note: String,
    article: {
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }
  })

  return model('Note', Note)
}