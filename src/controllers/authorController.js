const authorModel= require("../models/authorModel")


// 1st Problem
const createAuthor= async function (req, res) {
    let data= req.body
    if(data.author_id) {
        let savedData= await authorModel.create(data)
        res.send({msg: savedData})
    } else {
        res.send({msg: 'author_id must be needed'})
    }
}



// 2nd problem

const findAuthor= async function (req, res) {
    let data= req.body
    if(data.author_id) {
        let savedData= await authorModel.find({author_name:'Chetan Bhagat'})
        res.send({msg: savedData})
    } else {
        res.send({msg: 'author_id must be needed'})
    }
}



module.exports.createAuthor= createAuthor
module.exports.findAuthor=findAuthor