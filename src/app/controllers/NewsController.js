class NewsController{
    
    //[GET] /news
    index(req,res){
        res.render('news');
    }
    //[GET] /news/:slug 
    search(req,res){
        if(req.query.info =="hello"){
            res.render('home');
        }
        else{
            res.render('test');
        }
    }

}

module.exports = new NewsController;