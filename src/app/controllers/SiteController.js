const Course = require('../models/Course');

class SiteController{
    
    //[GET] /
    home(req,res){
        
        Course.find({}, function(error,course){
            if(!error){
                res.json(course);
            }
            else{
                res.status(400).json({error:'message'});
            }
        })

        // res.render('home');
    }


}

module.exports = new SiteController;