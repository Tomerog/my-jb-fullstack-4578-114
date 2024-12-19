const showFactor = (event) => {
    event.preventDefault()   
    try{
        console.log(getFactor(document.getElementById(`grade`).value))
    } catch (e){
        alert(e.message)
    }
}
const getFactor= (grade) =>{
    if(!grade) throw new Error(`grade is required`)
    if(grade<0) throw new Error(`grade must be a positive number`)
    return  10* Math.sqrt(grade)
}