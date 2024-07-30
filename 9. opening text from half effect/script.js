var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#page2',
        scroller: "body",
        // markers: true,
        start: '50% 50%',
        end: '100% 50%',
        scrub: 3,
        pin: true,
        // ease: "expoScale(0.5,7,none)",
    }
})

tl.to(".top", {
    top: "-50%",
}, "abc")

tl.to(".bottom", {
    bottom: "-50%",
}, "abc")

tl.to(".top h1", {
    top: "141%",
}, "abc")

tl.to(".bottom h1", {
    bottom: "-100%",
}, "abc")


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true
// });