// let num1 = +prompt(`enter first number`)
// let num2 = +prompt(`enter second number`)

// if(num1<=num2){
//     for(i= num1; i<=num2; i++){
//         document.write(i)
//     }
// } else { 
//     for(i= num2; i<=num1; i++){
//         document.write(i)
//     }
// }

// let num1 = +prompt(`enter first number`)
// let num2 = +prompt(`enter second number`)


// if(num1>=num2){
//     for( i= num1; i>=num2; i--)
//         document.write(i+ ` `)
// } else {
//     for( i= num2; i>=num1; i--)
//         document.write(i + ` `)
// }

// let num = +prompt(`enter  num`)
// let first = +prompt(`enter first number`)
// let last = +prompt(`enter last number`)
// let helper= 0

// if(first>last){
//     helper=first
//     first=last
//     last=helper

// }

// for( i=first; i<= last; i++)
//     if(i%num===0){
//         document.write(i +` `)
//     }

// let num;

// while(num!==0){
//     num = +prompt(`enter  num`)
//     alert(num % 7 === 0 ? `boom` : `not boom`)
// }


// let num  = +prompt(`enter  num`)

// while(num!==0){
//     num = +prompt(`enter  num`)
//     alert(num % 7 === 0 ? `boom` : `not boom`)
// }

// let num = 0

// while(num>=0){
//     num = +prompt(`enter  num`)
//     power = num ** 3
//     alert(power)
// }

// let num = +prompt(`enter  num`)

// while(num>=0){
//     alert(num ** 3)
//     num = +prompt(`enter  num`)
// }


// let sum = 0

// for(i=1; i<=10; i++){
//     let num = +prompt(`please enter number`)
//     sum += num
// }
// alert(sum)
// let average = sum / (i - 1)
// alert(average)


// let largestNumber=0

// for(i=1; i<=10; i++){
//     let num = +prompt(`please enter number`)
//     largestNumber= largestNumber>num ? largestNumber : num; 
// }
// alert(largestNumber)



// let smallestNumber;

// for(i=1; i<=10; i++){
//     let num = +prompt(`please enter number`)
//     smallestNumber= smallestNumber<num ? smallestNumber : num; 
// }
// alert(smallestNumber)


// let evenNumber=0
// let unevenNumber=0
// for(i=1; i<=10; i++){
//     let num = +prompt(`please enter number`)
//     if(num%2===0) evenNumber++
//     else unevenNumber++
// }
// alert(`you entered ${evenNumber} even numbers and ${unevenNumber} uneven numbers`)



// let evenNumber=0
// let unevenNumber=0
// let i=0

// while(i>=0){
//     let num = +prompt(`please enter number`)
//     if(num%2===0) evenNumber++
//     else unevenNumber++
//     i = num
// }

// alert(`you entered ${evenNumber} even numbers and ${unevenNumber} uneven numbers`)


// let num = +prompt(`please enter number`)
// let sum = 0

// while(num !== 0){
//    sum += num % 10
//    num = (num - (num % 10)) / 10;
// }

// alert(sum)

// let num = +prompt(`please enter number`)
// i=0

// while(num !== 0){
//    i++
//    num = (num - (num % 10)) / 10;
// }

// alert(i)



// let num;

// do { num= +prompt(`enter a number`)
//     alert(num**2)
// } while (num !== 0);