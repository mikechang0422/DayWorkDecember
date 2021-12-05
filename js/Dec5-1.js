let cursor = document.querySelector('.cursor')
let cursor2 = document.querySelector('.cursor2')
let cursor3 = document.querySelector('.cursor3')
function mouseMouseHandler (e){
    cursor.style.cssText = cursor2.style.cssText = cursor3.style.cssText = 'left:' + e.clientX + 'px; top: ' + e.clientY +'px;'
}

document.addEventListener('mousemove',mouseMouseHandler)