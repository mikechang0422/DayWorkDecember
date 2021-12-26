let container = document.querySelector('.container')
let title = document.querySelector('.title')

container.addEventListener('mousemove', (e) =>{

    let x = (window.innerWidth / 2 - e.pageX) / 10
    let y = (window.innerHeight / 2 - e.pageY) / 10
    title.style.transform = `translateX(${x}px) translateY(${y}px)`
})
