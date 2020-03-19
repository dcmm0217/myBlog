module.exports = app => {
    const router = require('express').Router();
    const article = require('../middleware/article');
    router.get('/',[article.getHot], (req, res) => {
        res.render('index',{hots:req.hots});
    });
    app.use(/\/(index)?/, router);
}