"use strict";

(() => {
    
    // QUESTION - 1!!!!!!!!!!!!



    // const generate7BoomAfterDelayAsync = (min,max)=>{

    // return new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         const num= Math.floor(Math.random()*(max-min)+min);
    //         console.log(num)
    //         if(num%7!==0)return reject(`try `);
    //         resolve(`boom`);
    //     }, 2000);
    // })}
    
    
    
    // document.getElementById(`button`).addEventListener(`click`,()=>{
    //     let min = document.getElementById(`min`).value
    //     let max = document.getElementById(`max`).value
    //     generate7BoomAfterDelayAsync(min,max).then(resolve=> console.log(resolve))
    //     .catch(reject => console.log(`error is ${reject}`))
    // } )

    //  QUESTION - 1.2 !!!!!!!!!!!!




    // const generate7BoomAfterDelayAsync = (min,max)=>{

    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             const num= Math.floor(Math.random()*(max-min)+min);
    //             console.log(num);
    //             if(num%7!==0)return reject(`try again`);
    //             resolve(`boom`);
    //         }, 2000);
    //     })}
        
    //     document.getElementById(`button`).addEventListener(`click`,async ()=>{
    //         let min = document.getElementById(`min`).value;
    //         let max = document.getElementById(`max`).value;
    //         try{
    //             const resolve = await generate7BoomAfterDelayAsync(min,max);
    //             console.log(resolve);
    //         } catch (e) {
    //             console.log(`error is ${reject}`);
    //         }
    //     } )

    
        


     // QUESTION - 2!!!!!!!!!!!!



    // const generatePrimeNumberAfterDelayAsync  = (min,max)=>{

    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             const num= Math.floor(Math.random()*(max-min)+min);
    //             console.log(num)
    //             if(num<=1)return reject(`not a prime number `);
    //             let prime = true;
    //             for(let i = 2; i<num; i++){
    //                 if(num%i===0){
    //                     prime = false
    //                 }
    //             }
    //             if(prime === false) return reject(`not a prime number `);
    //             resolve(`prime number`);
    //         }, 2000);
    //     })
    // }
    
   
    
    // document.getElementById(`button`).addEventListener(`click`,()=>{
    //     let min = document.getElementById(`min`).value
    //     let max = document.getElementById(`max`).value
    //     generatePrimeNumberAfterDelayAsync(min,max).then(resolve=> console.log(resolve))
    //     .catch(reject => console.log(`error is ${reject}`))
    // } )



    // QUESTION - 2.2 !!!!!!!!!!!!


    // const generatePrimeNumberAfterDelayAsync  = (min,max)=>{

    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             const num= Math.floor(Math.random()*(max-min)+min);
    //             console.log(num)
    //             if(num<=1){
    //                 return reject(`negative`)
    //             }
    //             let prime = true;

    //             for(let i = 2; i<num; i++){
    //                 if(num%i===0){
    //                     prime = false
    //                 }
    //             }
    //             if(prime === false) {
    //                 return reject(`not a prime number `)
    //             }
    //             resolve(`prime number`);
    //         }, 1000);
    //     })
    // }
    
    

    // document.getElementById(`button`).addEventListener(`click`,async ()=>{
    //     let min = +document.getElementById(`min`).value
    //     let max = +document.getElementById(`max`).value
    //     try{
    //         const resolve = await generatePrimeNumberAfterDelayAsync(min,max)
    //         console.log(resolve)
    //     } catch (e){
    //         console.log(e)
    //     }
     
    // } )



    const getPizzaFromServerAsync = () =>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const n = Math.floor(Math.random()*50);
                if(n%2!==0) return reject(`cant bring pizza from server`)
                const pizza = {}
                pizza.diameter = Math.floor(Math.random()*(50-10)+10)
                pizza.price = Math.floor(Math.random()*(80-20)+20)
                pizza.toppings = Math.floor(Math.random()*5)
                resolve(pizza)
            }, 1000);
        })
    }
    

    document.getElementById(`button`).addEventListener(`click`,async ()=>{
        try {
            const pizza = await getPizzaFromServerAsync()
            console.log(pizza)
        } catch (e) {
            console.log(e)
        }
    })


})()