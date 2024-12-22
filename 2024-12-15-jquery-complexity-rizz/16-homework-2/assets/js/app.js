"use strict";

$(() => {

    $(`#topButton`).click(function (event){
        $(`#firstNameResult`).html($(`#firstName`).val());


        $(`#firstName`).remove();
    })

    $(`#bottomButton`).click(function (event){
        $(`#lastNameResult`).html($(`#lastName`).val());


        $(`#lastName`).remove();
    })
    

    
})


