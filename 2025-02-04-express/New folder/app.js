const express = require('express');
const axios = require('axios');
const app = express();



// const defaultRoute = (req,res,next)=>{
//     const users = axios(`https://jsonplaceholder.typicode.com/users`)
//     res(users.data)
// }

const getUsers = (req,res,next)=>{
    const response = axios(`https://jsonplaceholder.typicode.com/users/${req.query.id}`)
    let users = response.data;
    if(req.query.search){
        users = users.filter(user=>user.name.includes(req.query.search))
    }
    res(users.data)

}
app.get('/users', getUsers);
// app.use(defaultRoute);

app.listen(3000, () => {
  console.log('server started');
});