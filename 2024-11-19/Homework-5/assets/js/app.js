function collectData(){
    const petType=document.getElementById(`petType`).value
    const petName=document.getElementById(`petName`).value
    const petAge=document.getElementById(`petAge`).value
    const imageUrl=document.getElementById(`imageUrl`).value
    return {
        petType:petType,
        petName:petName,
        petAge:petAge,
        imageUrl:imageUrl
    }
}


function generateHTML(data){
    const newHTML= `<tr>
          <td>${data.petType}</td>
          <td>${data.petName}</td>
          <td>${data.petAge}</td>
          <td><img style="width: 100px; height: 100px;" src="${data.imageUrl}"></td>
        </tr>`
    return newHTML
}



function renderHTML(newHTML){
    const list=document.getElementById(`tbody`)
    list.innerHTML += newHTML
}


function clearForm(){
    const carForm = document.getElementById('animalsTable')
    carForm.reset()
    }

    
let sum=0 
function addToTable(event){
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStorage(data)
    renderHTML(newHTML)
    clearForm()
    sum++
    const amount=document.getElementById(`amount`)
    amount.innerHTML = `amount of images in the table is: ${sum} `    
}



function saveToStorage(animalObject){
    const currentAnimalsInStorageJSON= localStorage.getItem(`animals`)
    let currentAnimalsInStorage;
    if (!currentAnimalsInStorageJSON){
        currentAnimalsInStorage= []
    } else {
        currentAnimalsInStorage = JSON.parse(currentAnimalsInStorageJSON)
    }
    currentAnimalsInStorage.push(animalObject)
    localStorage.setItem(`animals`, JSON.stringify(currentAnimalsInStorage))
}

function loadFromStorage(){
    const animalsJSON = localStorage.getItem(`animals`)
    if(animalsJSON){
        const animals= JSON.parse(animalsJSON)
            for(const animal of animals){    
            const newHTML = generateHTML(animal)
            renderHTML(newHTML)
        }
    }   
}
loadFromStorage()

