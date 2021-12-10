let side1 = document.querySelector('#side1')
let side2 = document.querySelector('#side2')

function scrollHandler(){
    side1.style.left = - window.pageYOffset * 2.5 + 'px'
    side2.style.left =  window.pageYOffset * 2.5 + 'px'
}

window.addEventListener('scroll',scrollHandler)