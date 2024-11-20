// let num1= +prompt(`enter num 1`)
// let num2= +prompt(`enter num 2`)
// let helper;


// if(num1>num2){
//     helper=num1;
//     num1= num2;
//     num2= helper;
// }

// for(i=num1; i<=num2;i++){
//     document.write(`${i} `)
// }


// let num = +prompt(`enter num 1`)

// for(i = 1; i <= num; i++){
//     document.write(num** i + ` `)
// }




// let sum = 0
// for( let i =1; i<= 10; i++){
//         for( let j =1; j<= 10; j++){
//         document.write(`*`)
//         for( let k =1; k<=3000000; k++){
//             sum+=k
//         }    
//     }
//     document.write(`<br>`)
// }


// const randomNumber= Math.random()
// const randomNumber100= randomNumber*21;
// const randomNumberParsed = parseInt(randomNumber100)+10
// document.write(randomNumberParsed)



// let num1 = +prompt(`enter num 1`)
// let num2 = +prompt(`enter num 2`)

// for(let i=1; i<= 100; i++){
//     let randomNumber= Math.random()
//     randomNumber *= num2-num1
//     randomNumber = parseInt(randomNumber) + num1
//     document.write(randomNumber + `<br>`)
// }

// let num= 1

// while(num>0){
//     num = +prompt(`enter num`)
//     for(let i=1; i<=num; i++){
//        alert(i)
//     }
// }


// let num= 1

// while(num>0){
//     num = +prompt(`enter num`)
//     for(let i=num; i>=1; i--){
//        alert(i)
//     }
// }


// let num= 1

// while(num>0){
//     num = +prompt(`enter num`)
//     for(let i=2; i<=num; i += 2){
//        alert(i)
//     }
// }



// let num= 1

// while(num>0 ){
//     num = +prompt(`enter num`)
//     if(num % 2 === 0){
//         for(let i=num; i>=1; i-=2){
//         alert(i)
//         }
//     }
// }


// let num = +prompt(`enter num`)

// for( let i =1; i<= num; i++){
//         for( let j =1; j<= num; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }



// let num = +prompt(`enter num`)
// let num2 = +prompt(`enter num`)
// for( let i =1; i<= num; i++){
//         for( let j =1; j<= num2; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }


// let num = +prompt(`enter num`)
// let length = num - (num-1)
// for( let i =1; i<= num; i++){
//         for( let j =1; j<= length; j++){
//         document.write(j)
//     }
//     length+=1
//     document.write(`<br>`)
// }



// let num = +prompt(`enter num`)

// for( let i =1; i<= num; i++){
//         for( let j =1; j<= num; j++){
//         document.write(j)
//     }
//     for( let j = num; j>=1; j--){
//         document.write(j)
//     }
//     document.write(`<br>`)
// }



// const emp = {
//     firstName: `tomer`,
//     lastName : `ognistoff`,
//     salary : 200
// }
// for(const property in emp){
//     document.write(` ${property} : ${emp[property]} <br>`)
// }

// emp.address = `kfar yona`

// document.write(`address : ${emp[`address`]} <br>`)

// delete emp.salary

// document.write(`salary : ${emp[`salary`]} <br>`)





// const grades = [50,60,70,80,90]


// for(const grade of grades){
//     document.write(`${grade} <br>`)
// }


// const grades = []

// for(let i = 1; i<=12; i++){
//     grades.push(parseInt(Math.random()*101))
// }

// document.write(`${grades}<br>`)

// document.write(`${grades[0]} <br>`)
// document.write(`${grades[4]} <br>`)


// for(const grade of grades){
//     document.write(grade+`<br>`)
// }

// grades[1] += 5
// document.write(`${grades}<br>`)

// let sum = 0
// for(grade of grades) {
//     sum += grade;
// }
// document.write(`${sum}<br>`)

// let max= 0
// for(grade of grades) {
//     max = max>grade?max:grade;
// }

// document.write(`${max}<br>`)

// const names = []
// for(let i =0;i<5;i++){
//     const name = prompt(`enter name ${i+1}`)
//     names.push(name);
// }

// document.write(names[0]+`<br> ${names[4]} <br> `)

// for(i=names.length-1; i>=0; i--){
//     document.write(`${names[i]}<br>`)
// }

const songs = []
for(let i =0;i<3;i++){
    const song = prompt(`enter song ${i+1}`)
    songs.push(song);
}
document.write(songs + `<br>`)
songs.splice(1,1)
document.write(songs + `<br>`)