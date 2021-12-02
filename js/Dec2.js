let txtb = $('.txtb')
let del = $('.fa-trash-alt')
let finish = $('.fa-check')

function delHandler(){
    let p = $(this).parent().parent()
    p.fadeOut(function(){
        p.remove()
    })
}
function finishHandler(){
    let p = $(this).parent().parent()
    p.fadeOut(function(){
        $('.comp').append(p)
        p.fadeIn()
    })
    $(this).remove()
}
function inputHandler(e){
    if(e.keyCode == 13 && $('.txtb').val() != ''){
        let task = $('<div class="task"></div>').text($('.txtb').val())
        let span = $('<span></span>')
        del = $('<i class="fas fa-trash-alt"></i>')
        finish = $('<i class="fas fa-check"></i>')
        task.append(span.append(finish,del))
        del.on('click',delHandler)
        finish.on('click',finishHandler)
        $('.notcomp').append(task)
        $('.txtb').val('')
    }
}

txtb.on('keyup',inputHandler)
del.on('click',delHandler)
finish.on('click',finishHandler)
