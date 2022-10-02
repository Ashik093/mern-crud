const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.post('/InsertProduct', ProductController.InsertProduct)
router.get('/GetProduct', ProductController.GetProduct)
router.post('/UpdateProduct/:id', ProductController.UpdateProduct)
router.post('/DeleteProduct/:id', ProductController.DeleteProduct)
router.get('/GetProductById/:id', ProductController.GetProductById)

module.exports = router