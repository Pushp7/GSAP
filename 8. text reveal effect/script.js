const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        scroller: "body",
        start: '20% 50%',
        end: '100% 50%',
        // markers: true,
        scrub: 1,
    }
})

tl.to("#text-layer2", {
    width: "100%",
})