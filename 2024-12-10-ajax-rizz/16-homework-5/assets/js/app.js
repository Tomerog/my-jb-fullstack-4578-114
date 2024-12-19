"use strict";

(() => {
    
    const creatUrl = () =>{
        const city = document.getElementById(`city`).value
        const url  = `https://api.weatherapi.com/v1/current.json?key=e4f014fca43547d98a1202416241612&q=${city}`
        return url
    }


    const getData = (url)=>{
        return fetch(url).then(response=>response.json())
    }


    const generateHTML = city =>{

        const newHTML = `
                        <li>${city.location.name}</li>
                        <li>${city.current.temp_c}</li>
                        <li>${city.current.condition.text}<img src="${city.current.condition.icon}"></li>
                        
                        `
        console.log(newHTML)
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById(`list`).innerHTML = newHTML

    

    const worki =async () =>{
        try {
            const url = creatUrl()
            const user = await getData(url)
            const newHTML = generateHTML(user)
            renderHTML(newHTML)
          

        } catch (error) {
            
            console.warn(error)
        }
    }

    document.getElementById(`city`).addEventListener(`input`,() => worki())

})()


