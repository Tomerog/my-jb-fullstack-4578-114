function collectData(){
    const color=document.getElementById(`color`).value
    return {
        colorName:color,
        color:color,
    }
}


function generateHTML(data){
    const newHTML= `<tr>
          <td>${data.colorName}</td>
          <td style="background-color:${data.color} ;"></td>
        </tr>`
    return newHTML
}



function renderHTML(newHTML){
    const list=document.getElementById(`tbody`)
    list.innerHTML += newHTML
}

let sum=0 
function addToTable(event){
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    sum++
    const amount=document.getElementById(`amount`)
    amount.innerHTML = `amount of colors in the table is: ${sum} `
    
}