var tl = gsap.timeline({paused: true})

tl.to("#menu", {
    right: 0,
    duration: 0.5,
})

tl.from("#menu h4", {
    x: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
})

tl.from("#menu i", {
    opacity: 0,
})

// tl.pause()

var menu = document.querySelector("#main i")
var close = document.querySelector("#menu i")

menu.addEventListener("click", function () {
    tl.play()
})

close.addEventListener("click", function () {
    tl.reverse()
})