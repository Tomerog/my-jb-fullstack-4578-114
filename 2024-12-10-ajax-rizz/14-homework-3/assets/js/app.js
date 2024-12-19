"use strict";

(() => {
    
 

    const getData = (url)=>{
        return fetch(url).then(response=>response.json())
    }


    const generateHTML = user =>{
        const newHTML = `
                        <li>${user.name}</li>
                        <li>${user.username}</li>
                        <li>${user.email}</li>
                        <li>${user.phone}</li>
                        `
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById(`list`).innerHTML = newHTML

    

    const worki =async () =>{
        try {
            const id = document.getElementById(`userID`).value
            const user = await getData(`https://jsonplaceholder.typicode.com/users/${id}`)
            const newHTML = generateHTML(user)
            renderHTML(newHTML)
            
        } catch (error) {
            
            console.warn(error)
        }
    }

    document.getElementById(`userID`).addEventListener(`input`,() => worki())

    const generateSelect = users => {
        const newHTML = users
            .map(user=>{
                return `
                <option value="${user.id}">${user.name}</option>
                `
            })
            .reduce((cum,cur)=> cum + cur,``)
        return newHTML
    }

    const renderUser = userOptions => document.getElementById('userID').innerHTML = userOptions

    const load =async ()=>{
        try{
        const users = await getData('https://jsonplaceholder.typicode.com/users')
        const userOptions = generateSelect(users)
        renderUser(userOptions)
        } catch(e){
            console.warn(e)
        }
    }

    load()
})()


