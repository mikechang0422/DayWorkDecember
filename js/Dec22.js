let dot = document.querySelector('.dot')
let sec =document.querySelector('.sec')
function clickHandler(){
    dot.classList.toggle('active')
    sec.classList.toggle('active')
}

function mousemoveHandler(e){
    dot.style.left = e.pageX + 'px'
    dot.style.top = e.pageY + 'px'
}

document.addEventListener('mousemove',mousemoveHandler)
dot.addEventListener('click',clickHandler)