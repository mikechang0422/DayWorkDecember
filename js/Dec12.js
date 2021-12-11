anime({
    targets: '.overlay .item',
    scaleX: 0,
    duration: 1500,
    delay: anime.stagger(200,{start:1000}),
    easing: 'easeOutSine'
}),
anime({
    targets: '.overlay',
    scaleX: 0,
    delay: 3500,
    easing: 'easeOutSine'
}),
anime({
    targets: '.header',
    translateY: [-100,0],
    opacity:[0,1],
    duration: 1000,
    delay: 3000,
    easing: 'easeOutSine'
}),
anime({
    targets: '.content .item',
    opacity: [0,1],
    duration: 300,
    delay: anime.stagger(500),
    easing: 'easeOutSine'
})