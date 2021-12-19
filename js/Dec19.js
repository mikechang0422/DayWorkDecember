function counter(){
    let count = setInterval(() => {
        let counter = document.querySelector('.counter')
        let preloader = document.querySelector('.preloader')
        let c = parseInt(counter.textContent)
        // $('.counter').text((++c).toString())
        counter.textContent = (++c).toString()
        cc = c * 3
        counter.style.filter = `hue-rotate(${cc}deg)`
        console.log(cc)
        if (c == 100){
            clearInterval(count)
            counter.classList.add('hide')
            preloader.classList.add('active')
        }
    }, 60)
}
counter()