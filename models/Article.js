module.exports = (model, Schema) => {

  const Article = new Schema({
    _id: String,
    headline: String,
    summary: String,
    URL: String,
    notes: [{
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }]
  })

  return model('Article', Article)
}