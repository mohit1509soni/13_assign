const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController")
const authorController = require('../controllers/authorController')



router.post('/create-author', authorController.createAuthor)
router.post('/create-book',bookController.idBook)
router.get('/find-author',authorController.findAuthor)
router.get('/update-book',bookController.updateBook)
router.get('/book-cost',bookController.bookCost)

module.exports = router;