// acquring the db model
const ToDo = require('../models/task');

// app main view
module.exports.toDoApp = function(request, response){
    ToDo.find({},(error, task) =>{
        if(error){
            console.log(error);
            return error;
        }

        return response.render('index.ejs',{
            title: 'ToDo App',
            task : task
        });
    });
};

// add task in database
module.exports.task = function(req, res){
    ToDo.create({
        description: req.body.description,
        type: req.body.type,
        due: req.body.due
    }, (err, result) => {
        if(err) return error(err);
        const task = result;
        return res.redirect('back');
    });
};

// delete tasks
module.exports.remove = function(req, res){
    let id = req.query.id;
    ToDo.findByIdAndDelete(id, (error)=>{
        if(error){
            console.log(error);
            return error;
        }
        return res.redirect('back');
    });
}