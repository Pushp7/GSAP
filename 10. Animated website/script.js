function section1Animation() {

    var tl = gsap.timeline()

    tl.from("nav h1, nav .navigation ul li, nav .navigation button", {
        y: -20,
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
        stagger: 0.13
    })

    tl.from(".center-left h1", {
        x: -100,
        opacity: 0,
        duration: 0.5
    }, "-=0.6")

    tl.from(".center-left p", {
        x: -50,
        opacity: 0,
        duration: 0.6
    })

    tl.from(".center-left button", {
        x: -10,
        opacity: 0,
        duration: 0.8
    })

    tl.from(".center-right img", {
        opacity: 0,
    }, "-=0.5")

    tl.from(".bottom img", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4
    }, "-=0.8")
}

function section2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            // markers: true,
            start: "top 85%",
            end: "top 10%",
            scrub: 2
        }
    })
    
    tl2.from(".services", {
        y: 60, 
        opacity: 0,
        duration: 0.8,
    })
    
    tl2.from(".elem:nth-child(1)", {
        x:-300,
        opacity: 0,
        duration: 1.5,
    }, "Radhe")
    
    tl2.from(".elem:nth-child(2)", {
        x:300,
        opacity: 0,
        duration: 1.5,
    }, "Radhe")
    
    tl2.from(".elem:nth-child(3)", {
        x:-300,
        opacity: 0,
        duration: 1,
    }, "Ram")
    
    tl2.from(".elem:nth-child(4)", {
        x:300,
        opacity: 0,
        duration: 1,
    }, "Ram")
}

section1Animation()
section2Animation()





































// gsap.from(".services h3", {
//     x: -100,
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: ".services h3",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 40%",
//         scrub: 2
//     }
// })

// gsap.from(".services p", {
//     x: 100,
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: ".services h3",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 40%",
//         scrub: 2
//     }
// })