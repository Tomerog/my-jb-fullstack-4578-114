function collectData(){
    const imageDescription=document.getElementById(`imageDescription`).value
    const imageUrl=document.getElementById(`imageUrl`).value
    return {
        imageDescription:imageDescription,
        imageUrl:imageUrl,
    }
}


function generateHTML(data){
    const newHTML= `<tr>
          <td>${data.imageDescription}</td>
          <td><img style="width: 100px; height: 100px;" src="${data.imageUrl}"></td>
        </tr>`
    return newHTML
}



function renderHTML(newHTML){
    const list=document.getElementById(`tbody`)
    list.innerHTML += newHTML
}


function clearForm(){
    const carForm = document.getElementById('imagesTable')
    carForm.reset()
    }

    
let sum=0 
function addToTable(event){
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    clearForm()
    sum++
    const amount=document.getElementById(`amount`)
    amount.innerHTML = `amount of images in the table is: ${sum} `
    
}