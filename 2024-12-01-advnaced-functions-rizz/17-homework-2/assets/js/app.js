// const arr=[]

// for(i=0; i<20; i++){
//     let ranNum = parseInt(Math.random()*101)
//     arr.push(ranNum)
// }

// const anotherNewArray= arr.map(num => `${num} <br>`)
// document.write(anotherNewArray)


// const even = arr.find(num => num % 2 === 0)
// document.write(`the even number is:`+even)


// const over50 = arr.find(num => num>50)
// document.write(`<br> the over 50 number is:`+over50)


// const allUneven= arr.filter(num => num % 2 !== 0)
// document.write(`<br> the uneven numbers are:`+allUneven)

// const allOver50= arr.filter(num => num>50)
// document.write(`<br> the over50 numbers are:`+allOver50)

// const indexOver50= arr.findIndex(num => num>50)
// document.write(`<br> the index of the first over 50 is:`+indexOver50)


// const getRandomBetween0and100 = () => Math.floor(Math.random()*101)

// const getRandomPoint= ()=>({
//     x:getRandomBetween0and100(),
//     y:getRandomBetween0and100()
// })

// const points=[]

// for(i=0;i<20;i++){
//     points.push(getRandomPoint())
// }
// console.log(`all the points`)
// points.forEach(point => console.log(point))


// console.log(`first x>y`)
// console.log(points.find(point=> point.x>point.y))

// console.log(`first y>50`)
// console.log(points.find(point=>point.y>50))

// console.log(`all uneven x`)
// console.log(points.filter(point=>point.x%2!==0))

// console.log(`all y>50`)
// console.log(points.filter(point=>point.y>50))

// console.log(`index of first x>50`)
// console.log(points.findIndex(point=>point.x>50))

// console.log(`all y>50`)
// console.log(points.filter(point=>point.y>50))

// console.log(`far from 0`)
// points
//     .map(point=>Math.sqrt(point.x**2 + point.y**2))
//     .forEach(point=>console.log(point))



const getRandomBetween0and100 = () => Math.floor(Math.random()*101)

const generatePizza= ()=>({
    x:getRandomBetween0and100(),
    y:getRandomBetween0and100()
})

const points=[]
for(i=0;i<20;i++){
        points.push(getRandomPoint())
    }