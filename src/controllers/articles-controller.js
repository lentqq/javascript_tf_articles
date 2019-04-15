const Article = require('../models/article')

module.exports = {
    getCreate: function(req, res) {
        res.render('articles/create');
    },

    postCreate(req, res) {
      let article = new Article({
          title: req.body.title,
          content: req.body.content,
          author: 'N.Kolev'
      });

      article.save(function(err, dbArticle) {
          res.redirect('/articles')
      });
    }
};