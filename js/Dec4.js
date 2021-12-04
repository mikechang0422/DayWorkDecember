function chickHandler (){
    $(this).toggleClass('active')
    $('.navigation_menu').toggleClass('active')
    $('.menu_icon i').toggleClass('fa-times')
}

$('.menu_icon').on('click',chickHandler)