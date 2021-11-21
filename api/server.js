const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


const ProjectsRouter = require('./project/router');
const ResourcesRouter = require('./resource/router');
const TasksRouter = require('./task/router');

const server = express();

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;