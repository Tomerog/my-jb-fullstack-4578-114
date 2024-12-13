function checkForm(event){
    event.preventDefault()
    const firstNameInput= document.getElementById(`firstName`)
    const firstName = firstNameInput.value;
    if(!firstName){
        alert(`error`)
        document.getElementsByClassName()
        return false
    }
    alert(firstName)
}