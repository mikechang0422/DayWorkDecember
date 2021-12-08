let items = document.querySelectorAll('.item')
function addActiveClass (){
    items.forEach((e) =>
        e.classList.remove('active'))
    this.classList.add('active')
}
items.forEach((e) =>
    e.addEventListener('mouseover',addActiveClass))

