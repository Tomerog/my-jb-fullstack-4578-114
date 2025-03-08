const express = require('express')

const app = express()


const logRequest = (req, res, next) => {
    console.log(`got a ${req.method} request to endpoint ${req.url}`)
    next()
}
app.use(logRequest)

const getUsers = async (req, res, next) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json() // Extract JSON data
    res.json(users)
}

const getSingleUser = async (req, res, next) => {
    const { id } = req.query
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    res.json(user)
}


app.listen(3000, () => console.log('express app started on port 3000...'))

app.use(logRequest)
app.get('/users', getUsers)
app.get('/users', getSingleUser)
