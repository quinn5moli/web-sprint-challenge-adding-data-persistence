const db = require('../../data/dbConfig')

const find = () => {
    return db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 'p.project_name', 'p.project_description')
}

const findById = async task_id => {
    const task = await db('tasks').where({ task_id }).first()

    if(task.task_completed === 1) {
        task.task_completed = true
    } else {
        task.task_completed = false
    }

    return task
}

const create = async (newTask) => {
    if(newTask.task_completed === true || newTask.task.task_completed === 1) {
        newTask.task_completed = 1
    } else {
        newTask.task_completed = 0
    }

    const [task_id] = await db('tasks').insert(newTask)

    return findById(task_id)
}

module.exports = {
    find,
    findById,
    create
}
