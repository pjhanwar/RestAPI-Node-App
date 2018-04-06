var mongoose = require("mongoose");

var User = require("../models/User");

var userController = {};

userController.list = function(req, res) {
    User.find({}).exec(function (err, users) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/users/index", {users: users});
        }
    });
};

userController.show = function(req, res) {
    User.findOne({username: req.params.username}).exec(function (err, user) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/users/show", {user: user});
        }
    });
};

userController.add = function(req, res) {
    res.render("../views/users/add");
};

userController.save = function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
    if(user)
    {
        console.log("Already exists");
        res.sendStatus(409);
    }
    else
    {
        var user = new User(req.body);
        user.save(function(err)
        {
            if(err)
            {
                console.log(err);
                res.render("../views/users/add");
            }
            else
                {
                console.log("Successfully added a user.");
                res.redirect("/users/show/"+user.username);
            }
        });
    }
});
};



userController.edit = function(req, res) {
    User.findOne({username: req.params.username}).exec(function (err, user) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/users/edit", {user: user});
        }
    });
};

userController.update = function(req, res) {
    User.findOneAndUpdate({username: req.params.username}, { $set: { username: req.body.username, displayname: req.body.displayname, department: req.body.department }}, { new: true }, function (err, user) {
        if (err) {
            console.log(err);
            res.render("../views/users/edit", {user: req.body});
        }
        res.redirect("/users/show/"+user.username);
    });
};



userController.delete = function(req, res) {
    res.render("../views/users/delete");
};

userController.delete1 = function(req, res)
{
    //console.log(req.body.username);
    User.findOne({username: req.body.username}, function(err, user)
    {
        if(!user)
        {
            console.log("No user to delete");
            res.sendStatus(404);
        }
        else
        {
            User.remove({username: req.body.username}, function(err)
            {
            if (err) {
            console.log(err);
            }
            else {
            console.log("User deleted!");
            res.redirect("/users");
            }
            });
        }

    });
};



module.exports = userController;