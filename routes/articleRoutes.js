const { Article } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = app => {

  // Get all articles from Database
  app.get('/articles', (req, res) => {
    Article.find()
      .populate('notes')
      .then(articles => res.json(articles))
      .catch(err => console.error(err))
  })

  // Get new articles by scrapping
  app.get('/new/articles', (req, res) => {
    axios.get('https://www.nytimes.com/')
      .then(({data: html}) => {
        const $ = cheerio.load(html)
        let arr = []
        $('article').each((i,el) => {
          if ($(el).contents().find('p').text()) {
            let article = {
              headline: $(el).contents().find('h2').text(),
              summary: $(el).contents().find('p').text(),
              URL: 'https://www.nytimes.com' + $(el).contents().find('a').attr('href'),
              _id: $(el).contents().find('h2').text()
            }
            arr.push(article)
            Article.create(article)
              .catch(err => console.error(err)) 
          }
        })
        res.json(arr)
      })
      .catch(err => console.error(err))
  })

  // Get user saved articles
  app.get('/user/articles')

  // Save all articles
  app.post('/articles', (req, res) => {
    Article.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  })

  // Save one article
  app.post('/user/articles')

}