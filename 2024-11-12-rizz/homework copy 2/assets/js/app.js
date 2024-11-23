// console.log(`test`)
// function average(array){
//     let sum=0
//     let count = 0
//     for(const cell of array){
//         sum+=cell
//         count++
//     }
//    console.log(`the average is ${sum/count}`)
// }

// const kir=[]
// let bish = +prompt(`please enter number`)
// for(let i=0;i<bish;i++){
//     kir.push(parseInt(Math.random()*100))
// }
// average(kir)


// function ranNum(start,end){
//     for(let i=0;i<100;i++)
//     document.write(parseInt(Math.random()*((end+1)-start)+start)+ `&nbsp;`)
// }

// let min=+prompt(`please enter min`)
// let max = +prompt(`please enter max`)

// ranNum(min,max)


// function squareHole(width, height){
//     for(let row=0;row<height;row++){
//         for(let col=0;col<width;col++){
//             if(row===0 || row===height-1){
//                 document.write(`*`)
//             } else if(col===0 || col===width-1){
//                 document.write(`*`)
//             } else{
//                 document.write(`&nbsp;&nbsp;`)
//             }
            
//         }
//         document.write(`<br>`)
//     }
// }

// squareHole(5, 5);



function weird(size){
    for(row=size; row>0;row--){
        for(col=row;col>0;col--){
            document.write(col+` `)
        }
        for(col=row;col>0;col--){ // this for loop adds stars for each row as the amount of rows for the second iteration of the question
            document.write(`*`+` `)
        }
        document.write(`<br>`)
    }
}

// weird(4)


function weird(num){
    for(let row=1; row<=num;row++){
        for(let blankLeft=1; blankLeft<=num-row; blankLeft++){
            document.write(`&nbsp;&nbsp;`)
        }
        for(let colLeft=1; colLeft<=row; colLeft++){
            document.write(colLeft)
        }
        for(let colRight=row-1; colRight>=1;colRight--){
            document.write(colRight)
        }
        document.write(`<br>`)
    }
}


weird(5)