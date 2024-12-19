"use strict";

(() => {

    const getPower= (num)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const power = num**2
                if(num%3===0){
                    reject(`cant be divisible by 3`)
                    return
                }
                resolve(power)
            },2000)
        })
    }

    document.getElementById(`power`).addEventListener(`click`,()=>{
        let userNum = +prompt(`please enter num`)
        getPower(userNum).then(result => console.log(result))
        .catch(result=>console.log(result))
    })
    


})()