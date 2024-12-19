"use strict";

(() => {
    
    

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
 
        return newHTML
    }


    const picsPerAlbum = albums =>{
        const result = [...new Set(albums.map(album=>album.albumId))]
        .map(albumId=>({
                albumId,
                picsInAlbum: albums.filter(album => album.albumId===albumId).length
            })
        )
        .map(album => `
            <tr>
                <td>in album:${album.albumId}</td>
                <td>there are ${album.picsInAlbum} thumbnails</td>
            </tr>
        `)
        .reduce((cum, cur) => cum + cur, '')
       console.log(result)
       return result
    }

    const renderHTML = newHTML => document.getElementById(`tbody`).innerHTML = newHTML
    const renderStats = newHTML => document.getElementById(`stats`).innerHTML = newHTML

    const worki =async () =>{
        try {
            
            const albums = await getData(`https://jsonplaceholder.typicode.com/photos`)
            const newHTML = generateHTML(albums)
            const statsHTML = picsPerAlbum(albums)
            renderStats(statsHTML)
            renderHTML(newHTML)
        } catch (error) {
            console.warn(error)
        }
    }

    document.getElementById(`button`).addEventListener(`click`,() => worki())
    
})()


