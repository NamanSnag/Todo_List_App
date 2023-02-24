const express = require('express');

// getting router instance
const router = express.Router();

const toDoApp = require('../controllers/toDo_Controller');

router.get('/', toDoApp.toDoApp);

router.post('/task', toDoApp.task);

router.get('/remove', toDoApp.remove);

// exporting routes
module.exports = router;