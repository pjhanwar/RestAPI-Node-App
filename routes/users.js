var express = require('express');
var router = express.Router();


var user = require("../controllers/UserController.js");

// Get all users
router.get('/', user.list);

// Get single user by username
router.get('/show/:username', user.show);

// Create user
router.get('/add', user.add);

// Save user
router.post('/save', user.save);

// Edit user
router.get('/edit/:username', user.edit);

// Edit update
router.post('/update/:username', user.update);

// Delete user
router.get('/delete', user.delete);

router.post('/delete1', user.delete1);

module.exports = router;
