module.exports = (model, Schema) => {

  const Article = new Schema({
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