"use strict";

(() => {

    const myfunc = (n) =>{
        if(n<=1) return
        document.write(n)
        
        myfunc(n-2)
    }

    myfunc(10)
})()