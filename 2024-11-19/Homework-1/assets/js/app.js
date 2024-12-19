function collectData(){
    const itemName=document.getElementById(`itemName`).value
    const amount=document.getElementById(`amount`).value
    return {
        itemName:itemName,
        amount:amount
    }
}


function generateHTML(data){
    const newHTML= `<li>Ingredient: ${data.itemName}, Amount: ${data.amount}</li>`
    return newHTML
}



function renderHTML(newHTML){
    const list=document.getElementById(`list`)
    list.innerHTML += newHTML
}
function addToList(event){
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
}