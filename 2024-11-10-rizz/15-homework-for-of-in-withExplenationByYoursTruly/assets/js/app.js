// const cars = [
//     {
//         model: `volvo`,
//         year: `2000`,    
//         color: `green`,
//         },
//     {
//         model: `masda`,
//         year: `1900`,    
//         color: `yellow`,
//         },
//     {
//         model: `hundai`,
//         year: `1800`,    
//         color: `purple`,
//         }
// ] 

// for(const car of cars){
//     for(const carly in car){
//         document.write(`${carly}: ${car[carly]} <br>`)
//     }
//     document.write(`<br>`)
// }

const arrayOfObjects = [
    {
        type:`shirt`,
        size:`small`,
        price:`40$`,
        color:`blue`,
    },
    {
        type:`hoodie`,
        size:`large`,
        price:`30$`,
        color:`black`,
    },
    {
        type:`pants`,
        size:`medium`,
        price:`20$`,
        color:`grey`,
    },
    {
        type:`socks`,
        size:`large`,
        price:`10$`,
        color:`white`,
    },
    {
        type:`underwear`,
        size: `XXL`,
        price:`40$`,
        color:`blue`,
    },
    
]

for(const objectInArray of arrayOfObjects){ // takes once the value of each clothing article onto itself and repeats the loop until it goes over every object in the Araragi
    for(const propertyNames in objectInArray){ //gives itself one property of current object
        document.write(`${propertyNames}: ${objectInArray[propertyNames]} <br>`) // presents the current value of the property it took from the object and then asks for the current object what is the value of the current property
    }
    document.write(`<br>`)
}