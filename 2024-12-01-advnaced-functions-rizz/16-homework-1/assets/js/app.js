// 1
function nameCallback(callback){
    callback()
}
// nameCallback(() =>document.write(`tomer`))





// 2
function cool(callback) {
	callback();
}

// cool(()=>document.write(Math.random()))






// 3
function nice(callback) {
	callback(42);
}


// nice((num)=>body.innerHTML=num)




// 4
function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write("Num:" + num);
}



// amazing((num1,num2,num3,num4,num5)=>{
//     const arg= [num1,num2,num3,num4,num5]
//     const ranArg= parseInt(Math.random()*arg.length)
//     return arg[ranArg]
// })

// 5


function cool(paintCallback) {
	paintCallback();
}


function cool2Kir(){
    const colors = [`green`,`blue`,`pink`,`yellow`]
    let randomNum  = parseInt(Math.random()*colors.length)
    let color = colors[randomNum]
    const body=document.getElementById(`body`)
    body.style.backgroundColor=color
}

// cool(cool2Kir)




// 6

function nice2(paintCallback) {
	paintCallback(`Green`);
}


function nice2Kir(color){
    const body=document.getElementById(`body`)
    body.style.backgroundColor=color
}

// cool2(nice2Kir)



// 7 

function amazing2(paintCallback) {
	const paintedColor = paintCallback(`Red`, `Green`, `Blue`);
	document.write(`Painted Color: ` + paintedColor);
}



// amazing2((num1,num2,num3)=>{
//     const colors = [num1,num2,num3,]
//     let randomNum  = parseInt(Math.random()*colors.length)
//     let color = colors[randomNum]
//     const body=document.getElementById(`body`)
//     body.style.backgroundColor=color
//     return color
// })









// 8

function kiriskus(){
    let randomNum  = parseInt(Math.random()*101)
    return randomNum
}

// setInterval(() => {
//     document.write(kiriskus()+`<br>`)
// }, 2 * 1000)

// 9

// setInterval(() => {
//     const colors = [`green`,`blue`,`pink`,`yellow`]
//     let randomNum  = parseInt(Math.random()*colors.length)
//     let color = colors[randomNum]
//     const body=document.getElementById(`body`)
//     body.style.backgroundColor=color
// }, 1000)

// 10

// setInterval(() => {
//     const array = []
//     let i=0
//     while(array.length<100){
//         let randomNum  = parseInt(Math.random()*10000)
//         array.push(randomNum)
//         i++
//         if(i%11===0){
//             array.push(`<br>`)
//         }
//     }
//     const body=document.getElementById(`body`)
//     body.innerHTML = array
// }, 3000)