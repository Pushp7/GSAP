gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
})

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box"
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     },
// })

gsap.from("#page3 h1",{
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        // markers: true,
        start: "top 80%"
    },
})

gsap.from("#page3 h2",{
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        // markers: true,
        start: "top 65%"
    },
})

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 40%",
        scrub: 3,   //scrub's value will be either boolean(true or false) or from range of 1-5. It produces animation only while scrolling and while giving value from 1-5 it provides smoothness level of animation.
    }
})

