"use strict";

(() => {

    const generateStats = users => {
        const totalLng = users.reduce((sum, user)=> sum + +user.address.geo.lng, 0)/users.length
        const totalLat = users.reduce((sum, user)=> sum + +user.address.geo.lat, 0)/users.length
        return `
        <tr>
          <td>${users.length}</td>
          <td>${totalLng}</td>
          <td>${totalLat}</td>
        </tr>`
    }


    const getData = (url)=>{
        return fetch(url).then(response=>response.json())
    }


    const generateHTML = users =>{
        console.log(users)
        const newHTML = users.map(
            user=> {
                const { name, username, email, address } = user
                const {lat , lng} = address.geo
                return `
                <tr>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${lat}</td>
                <td>${lng}</td>
                </tr>`
            }
        ).reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById(`tbody`).innerHTML = newHTML

    const renderStats = newStats => document.getElementById(`stats`).innerHTML = newStats

    const worki =async (url) =>{
        try {
            const users = await getData(url)
            const newHTML = generateHTML(users)
            renderHTML(newHTML)
            const newStats  = generateStats(users)
            renderStats(newStats)

        } catch (error) {
            
            console.warn(error)
        }
        

    }

    worki(`https://jsonplaceholder.typicode.com/users`)

})()


