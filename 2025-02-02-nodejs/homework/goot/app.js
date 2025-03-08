const express = require('express')
const server = express()
const axios = require('axios')

const getUsers = async (req, res,next) => {
const response = await axios('https://jsonplaceholder.typicode.com/users')
  res.json(response.data)
}

const getUser = async (req, res,next) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${req.query.id}`)
    res.json(response.data)
}

const notFound = (req, res,next) => {
    res.status(404).send('Not Found')
}


server.get('/users',getUsers)
server.get('/user',getUser)
server.use(notFound) 

server.listen(3000, () => {
  console.log('Server is running on port 3000')
});