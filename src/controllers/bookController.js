const { count } = require("console")
const bookModel = require("../models/bookModel")


const idBook= async function (req, res) {
    let dataBook= req.body
    let savedData= await bookModel.create(dataBook)
    res.send({msg:savedData})
}

// 3rd problem

const updateBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.findOneAndUpdate({bookName: 'Two states',price:100,new:true})
    res.send({msg:savedData})
}


//4th problem

const bookCost= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.find( { price : { $gte: 100, $lte: 200} } ).select({ author_id :1})
    res.send({msg:savedData})
}






module.exports.idBook= idBook
module.exports.updateBook=updateBook
module.exports.bookCost=bookCost