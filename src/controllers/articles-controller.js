module.exports = {
    getCreate: function(req, res) {
        res.render('articles/create');
    },

    postCreate(req, res) {
        console.log(req.body);
        res.end();
    }
};