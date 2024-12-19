const firstNameInput= document.getElementById(`firstname`)
const lastNameInput= document.getElementById(`lastname`)
const genderInputMale= document.getElementById(`genderMale`)
const genderInputFemale= document.getElementById(`genderFemale`)
const selectInput= document.getElementById(`select`)
const textInput= document.getElementById(`messege`)


function formSubmit(event){


    event.preventDefault()


    const firstName=firstNameInput.value
    const lastName=lastNameInput.value
    const genderMale=genderInputMale.value
    const genderFemale=genderInputFemale.value
    const select=selectInput.value
    const messege= textInput.value
    checkcheck(firstName,firstNameInput)
    checkcheck(lastName,lastNameInput)
    checkcheck(messege,textInput)
}

function checkcheck(element,dom){
    if(!element){
        dom.classList.add(`pinki`)
        alert(`${element} is missing`)
        return
    }
}
