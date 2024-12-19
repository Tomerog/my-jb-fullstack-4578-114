"use strict";
(() => {
    





    const getAverage = numbers => {
        
        
            const average = numbers.reduce((currentSum, currentNum)=> currentSum+currentNum,0)/numbers.length
            if(typeof numbers === `undefined`) throw new Error(`numbers must not be undefined`)
            if(typeof numbers === null) throw new Error(`numbers must not be null`)
            if(!Array.isArray(numbers)) throw new Error(`numbers must be array`)    
            if(!numbers.length===0) throw new Error(`numbers must not be an empty array`)    
            return average
       
    } 
    
    const btn = document.getElementById(`invoker`)
    btn.addEventListener(`click`, ()=>{
        try{
            console.log(getAverage([1,3,5,9]))
        }   catch (e){
            alert(e.message)
        }
        
    })










    // if(numbers=== null || sum=== undefined) throw Error(`array must be defined`)
    //     if(typeof sum === "string") throw Error(`array must be numbers`)
    //     if(numbers.length<=0) throw Error(`array must have input`)






})()



