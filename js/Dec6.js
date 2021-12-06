function clickHandler(){
    $(this).toggleClass('fa-times')
    $('.navigation_menu').toggleClass('active')
}
$('.menu_toggle_btn').on('click',clickHandler)