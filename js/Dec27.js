
function btnHandler(){
    let inputBox = $('.input_box').val()
    let NullVal = ''
    if(inputBox != NullVal){
        $('ul').append(`<li>${inputBox}<span><i class="fas fa-check"></i><i class="fas fa-trash-alt"></i></span></li>`)
        $('.input_box').val('')
    }
    else{
        return
    }
}

function checkHandler(){
    $(this).parent().parent('li').toggleClass('bg-color')
}

function trashAltHandler(){
    $(this).parent().parent('li').animate({top:'1rem'},100).fadeOut(200)
}



$('.btn').on('click',btnHandler)
$('ul').on('click','.fa-check',checkHandler)
$('ul').on('click','.fa-trash-alt',trashAltHandler)