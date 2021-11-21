const express = require('express')
const Tasks = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.find()
    .then(tasks => {
        tasks.forEach(task => {
                if(task.task_completed === 1) {
                    task.task_completed = true
                } else {
                    task.task_completed = false
                }
            });
            
            res.json(tasks)

        })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.json(task)
        })
        .catch(next)
})



module.exports = router 