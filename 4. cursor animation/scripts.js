const main = document.querySelector("body")
main.addEventListener("mousemove", function(event){
    gsap.to("#cursor", {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "back.out(1.7)"
    })
})