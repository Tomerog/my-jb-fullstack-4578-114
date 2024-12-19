"use strict";

(() => {
    
    const creatUrl = () =>{
        const url  = `https://jsonplaceholder.typicode.com/photos`
        return url
    }


    const getData = (url)=>{
        return fetch(url).then(response=>response.json())
    }


    const generateHTML = albums =>{
        const newHTML = albums.slice(0,100).map(
            album => {
            return `<tr>
                <td>${album.albumId}</td>
                <td>${album.id}</td>
                <td>${album.title}</td>
                <td><img src="${album.thumbnailUrl}"></td>
            <tr>`
            
        }
    ).reduce((cum,cur)=> cum+cur,``)
    console.log(newHTML)
        return newHTML
    }




    const renderHTML = newHTML => document.getElementById(`tbody`).innerHTML = newHTML
   

    const worki =async () =>{
        try {
            const url = creatUrl()
            const albums = await getData(url)
            const newHTML = generateHTML(albums)
            renderHTML(newHTML)
        } catch (error) {
            console.warn(error)
        }
    }

    document.getElementById(`button`).addEventListener(`click`,() => worki())
    
})()


