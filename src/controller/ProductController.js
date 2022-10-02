const ProductModel = require('../model/ProductModel');
exports.InsertProduct = (req, res) => {
    let reqBody = req.body
    ProductModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } else {
            res.status(200).json({
                status: "success",
                message: data
            })
        }
    })
}
exports.GetProduct = (req, res) => {

    ProductModel.find((err, data) => {
        if (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } else {
            res.status(200).json({
                status: "success",
                message: data
            })
        }
    })
}
exports.GetProductById = (req, res) => {
    let id = req.params.id
    let query = { _id: id }
    ProductModel.findOne(query, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } else {
            res.status(200).json({
                status: "success",
                message: data
            })
        }
    })
}
exports.UpdateProduct = (req, res) => {
    let id = req.params.id
    let query = { _id: id }
    ProductModel.updateOne(query, req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } else {
            res.status(200).json({
                status: "success",
                message: data
            })
        }
    })
}
exports.DeleteProduct = (req, res) => {
    let id = req.params.id
    let query = { _id: id }
    ProductModel.remove(query, req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } else {
            res.status(200).json({
                status: "success",
                message: data
            })
        }
    })
}