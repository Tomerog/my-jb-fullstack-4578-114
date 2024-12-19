"use strict";

(() => {

    function paintRandomColor(){
       
        const colorsArray = [`red`,`green`,`purple`,`blue`,`yellow`]
        const randomColor = colorsArray[Math.floor(Math.random()*5)]
        this.style.backgroundColor  = randomColor
        this.style.backg
    }

   
   const paragraphs = Array.from(document.getElementsByTagName('p'))
   paragraphs.forEach(p=>p.addEventListener('click', paintRandomColor))
   console.log(paragraphs)
    
})()


