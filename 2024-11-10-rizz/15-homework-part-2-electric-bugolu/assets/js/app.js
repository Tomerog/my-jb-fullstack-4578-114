// const geolocations=[];

// for(i=1; i<=3; i++){
//     const latitude = prompt(`Enter the latitude for location ${i}:`);
//     const longitude = prompt(`Enter the longitude for location ${i}:`);
//     const geolocation = {
//         latitude: latitude,
//         longitude: longitude,
//     };
//     geolocations.push(geolocation);
// }

// for(geolocation of geolocations){
//     for(const property in geolocation){
//         document.write(`${property}: ${geolocation[property]} <br>`)
//     }
//     document.write(`<br>`)
// }











// new side quest

// const books = [
//     {
//         code:`3214`,
//         name:`megadesh hashabat`,
//         author:`megidish`,
//         price:`40$`,
//     },
//     {
//         code:`1231`,
//         name:`the pdfiles`,
//         author:`jd`,
//         price:`69$`,
//     },
//     {
//         code:`2234`,
//         name:`run down mechanics`,
//         author:`kiril`,
//         price:`20$`,
//     },
// ]

// const jsonBooks = JSON.stringify(books)

// alert(jsonBooks)

// const items = JSON.parse(jsonBooks)

// console.log(books);
// console.log(items);


// for(const item of items){
//     for(const parameter in item){
//         document.write(`Book ${parameter}: ${item[parameter]} <br>`)
//     }
//     document.write(`<hr>`)
// }




// new side quest



// const myCat = {
//     name:`kiril`,
//     age:`37`,
//     color:`grey`,
//     "have Balls": false,
// }

// const ourCat = JSON.stringify(myCat)
// alert(ourCat)
// const yourCat = JSON.parse(ourCat)


// for(const usCat in yourCat){
//     document.write(` ${usCat}: ${yourCat[usCat]} <br>`)
// }






// new side quest



// const websiteAddress = prompt(`please enter file`)

// const suffix = websiteAddress.substring(websiteAddress.indexOf(`.`))
// const images=[`.jpg`,`.png`,`.jpeg`]
// for(const image of images){
//     if(suffix === image){
//         document.write(image)
//     }
// }





// new side quest

// const websiteAddress = prompt(`please enter number`)

// if(websiteAddress.length === 10){
//     const kiril = websiteAddress.startsWith(`05`);
//     document.write(kiril ? `legal` : `Illegal`)
// } else{document.write(`illegal`)}




// new side quest




// const websiteAddress = prompt(`please enter number`)

// if(websiteAddress.length >6 ){
//     const kiril = /[A-Z]/.test(websiteAddress);
//     document.write(kiril ? `legal` : `too weak no upper case letter` )
// } else{document.write(`illegal`)}





// new side quest






const geolocations = []

for(i=1; i<=1; i++){
    let longitude = prompt(`please enter longitude ${i}`)
    let latitude = prompt(`please enter latitude ${i}`)
    const Geolocation= {longitude: longitude, latitude: latitude,}
    geolocations.push(Geolocation)
}
for(geolocation of geolocations){
        for(const property in geolocation){
            document.write(`${property}: ${geolocation[property]} <br>`)
        }
        document.write(`<br>`)
    }