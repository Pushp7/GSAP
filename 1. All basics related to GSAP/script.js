// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 600,
//     y: 300,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1  // -1 repeats infinite time
// })

// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1,
//     yoyo: true  //if yoyo's value is true then it will animate like to and fro motion
// })


// gsap.from("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.to("h1", {
//     // color : "yellow",
//     opacity: 0,
//     duration: 2,
// })

// gsap.from("h1", {
//     color : "yellow",
//     opacity: 0,
//     y: 25,
//     duration: 2,
//     delay: 1,
//     stagger: 0.3,  // baari baari se ek ek element animate karega. Stagger me humlog speed value dete hai.
// })


const tl = gsap.timeline()
tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("h3", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.from("#text", {
    y: -20,
    opacity: 0,
    duration: 1,
    scale: 1.5

})

