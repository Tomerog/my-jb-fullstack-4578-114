// function getAbs(n) {
//     if(n > 0) return n;
//     return -n;
// }

// function getAbs2(n) {
//     return n > 0 ? n : -n
// }

// console.log(getAbs(10))
// console.log(getAbs2(10))
// console.log(getAbs(-10))
// console.log(getAbs2(-10))







// function getAbs(n){
//     return n>0?n:-n
// }
// console.log(`this number is absolute ${getAbs(-10)}`)










// function isPrime(num){
//     if(typeof num !== `number`) return undefined;
//     for(let i =2; i<num; i++){
//         if(num % i === 0) return false
//     }
//     return true
// }

// console.log(isPrime(7))





function getReversed(str){
    if(typeof str !== `string`) return
    let result= ''
    for(let i=str.length-1; i>=0 ; i--){
        result += str[i]
        
    }
    return result
}


const kiril = prompt(`enter name`)
console.log(getReversed(kiril))















