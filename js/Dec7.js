let items = document.querySelectorAll('.item')
function activeLink (){
    items.forEach((item) =>
        item.classList.remove('active')
    )
    this.classList.add('active')
    document.querySelector('.indicator').classList.add('active')
}

items.forEach((item) =>
    item.addEventListener('click',activeLink)
)
