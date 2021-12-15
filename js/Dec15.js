let countDate = new Date('Jan 1,2022 00:00:00').getTime()

function newYear(){
    let now = new Date().getTime()
    gap = countDate - now
    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24
    let d = Math.floor(gap / (day))
    let h = Math.floor(gap % (day) / (hour))
    let m = Math.floor(gap % (hour) / (minute))
    let w = Math.floor(gap % (minute) / (second))
    
    document.querySelector('.day').innerText = d
    document.querySelector('.hour').innerText = h
    document.querySelector('.minute').innerText = m
    document.querySelector('.second').innerText = w

}

setInterval(function(){
    newYear()
},1000)