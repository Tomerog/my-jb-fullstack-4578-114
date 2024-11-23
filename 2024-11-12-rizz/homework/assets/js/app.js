// const matrix = [
//     [12, 23, 34, 45], 
//     [56, 67, 78, 89], 
//     [10, 20, 30, 40]
// ];

// let sum = 0 
// for(let row=0; row<matrix.length;row++){
//     for(let col=0;col<matrix[row].length;col++){
//         document.write(`${matrix[row][col]} , `)
//         sum += matrix[row][col]
//     }
//     document.write(`<br>`)
// }
// document.write(sum)
// document.write(`<br>`)
// let count = 0
// let sum = 0
// let max = 0
// let min = 100
// for(const row of matrix){
//     for(const cell of row){
//         document.write(cell+`|`)
//         sum += cell
//         count ++
//         max= max>cell?max:cell;
//         min= min<cell?min:cell;
//     }
//     document.write(`<br>`)
// }
// document.write(`sum is:`+sum)
// document.write(`<br>`)
// document.write(`average is:`+ sum/count)
// document.write(`<br>`)
// document.write(`max is:`+ max)
// document.write(`<br>`)
// document.write(`min is:`+ min)

// let count = 0
// let sum = 0
// let max = 0
// let min = 100

// for(const row of matrix){
//     for(let cell of row){
        
//         sum += cell
//         count ++
//         max= max>cell?max:cell;
//         min= min<cell?min:cell;
//         if(cell%7!==0){
//             cell = `:(`
//             document.write(cell+`|`)
//             }
//         document.write(cell+`|`)
//     }
//     document.write(`<br>`)
// }










// new sidequest
// const multiplicationBoard = []

// for(let row=1;row<=10;row++){
//     let objectRow=[]
//     for(let col=1;col<=10;col++){
//        objectRow.push(row*col)
       
//     }
    
//     multiplicationBoard.push(objectRow)
    
// }

// // document.write(multiplicationBoard)

// let sum=0
// for(const row of multiplicationBoard){
//     for(const cell of row){
//         document.write(cell+`|`)
//         sum+=cell
//     }
//     document.write(`<br>`)
// }
// document.write(`this is the sum ${sum}`)





// new sidequest


//    for(let row of products){
//     for(let cell of row){
//         document.write(cell+`|`)
//     }
//     document.write(`<br>`)
//    }

// const products = [
//     ["Onion", "Carrot", "Tomato", "Cucumber"],
//    ["Apple", "Banana", "Peach", "Grapes", "Orange"],
//     ["Wheat", "Flour",]
//    ]
// let shortest=20
// let longest=0
// let arrayOfShortest= []
// let arrayOfLongest= []
// for(let row of products){
//     for(let cell of row){
//         document.write(cell+`|`)
//     if(cell.length < shortest){
//         shortest = cell.length
//         arrayOfShortest = [cell];
//     } else if(cell.length === shortest){
//         arrayOfShortest.push(cell);
//     }
//     if(cell.length > longest){
//         longest = cell.length
//         arrayOfLongest = [cell];
//     } else if(cell.length === longest){
//         arrayOfLongest.push(cell);
//     }
//     }
//     document.write(`<br>`)

// }
// document.write( `The shortest words are: `)
// for(let cell of arrayOfShortest){
//     document.write( `${cell}, `)
// }
// document.write(`<br>`)
// document.write( `The longest words are: `)
// for(let cell of arrayOfLongest){
//     document.write( `${cell}, `)
// }


