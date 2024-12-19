function collectData(){
    const firstName=document.getElementById(`firstName`).value
    const lastName=document.getElementById(`lastName`).value
    const grade=document.getElementById(`grade`).value
    return {
        firstName:firstName,
        lastName:lastName,
        grade:grade
    }
}


function generateHTML(data){
    const newHTML= `<li> ${data.firstName} ${data.lastName} grade is ${data.grade}</li>`
    return newHTML
}



function renderHTML(newHTML){
    const list=document.getElementById(`list`)
    list.innerHTML += newHTML
}

let sum = 0
let amount = 0
let average = 0
function renderAverage(){
    const grade=+document.getElementById(`grade`).value
    sum += grade
    amount++
    calcAverage = sum/amount
    const average= document.getElementById(`average`)
    average.innerHTML = `the class average is ${calcAverage}`
}
function addToList(event){
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    renderAverage()
}