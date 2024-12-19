"use strict";

(() => {

    const getPower= (num,successCallback,errorCallback)=>{
        setTimeout(()=>{
            const power = num**2
            if(num%3===0){
                errorCallback(`cant be divisible by 3`)
                return
            }
            successCallback(power)
        },3000)
    }

    document.getElementById(`power`).addEventListener(`click`,()=>{
        let num = +prompt(`please enter num`)
        const successCallback = power=>{
            console.log(power)
        }
        const errorCallback= error=> {
            console.log(error)
        }
        getPower(num,successCallback,errorCallback)
    })
    


})()