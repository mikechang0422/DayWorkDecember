let images = document.querySelectorAll('img')

function headerHandler(e){
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (let [index,image] of images.entries()){
        offset = offset * 1.3

        let blurValue = (Math.pow((index / images.length - percentage) , 2) * blur )

        image.style.setProperty('--offset',`${offset}px`)
        image.style.setProperty('--blur',`${blurValue}px`)
    }
}

document.querySelector('header').addEventListener('mousemove',headerHandler)