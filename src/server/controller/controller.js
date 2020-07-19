const TodoItem = require('../models/todo')

const controller = {
    create: async function(req, res){
        let data = req.body
        let todoInstance = new TodoItem(data)
        let result = await todoInstance.save()
        res.status(200).send(result)
    },
    update: async function(req, res){
        let id = req.params.id
        let data = req.body
        let result = await TodoItem.findByIdAndUpdate({_id: id}, data, {new: true}).exec()
        res.status(200).send(result)
    },
    read: async function(req, res){
        let result = await TodoItem.find().exec()
        res.status(200).send(result)
    },
    readOne: async function(req, res){
        let id = req.params.id
        let result = await TodoItem.findById(id).exec()
        res.status(200).send(result)
    },
    delete: async function(req, res){
        let id = req.params.id
        let result = await TodoItem.deleteOne({_id: id}).exec()
        res.status(200).send(result)
    },
}

module.exports = controller