var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1.5,
        ease: "back.out",
    })
})

imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"
    cursor.style.backgroundColor = "#12e84fd1"
    gsap.to(cursor, {
        scale: 3,
    })
});

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = ""
    cursor.style.backgroundColor = "#ffffff"
    gsap.to(cursor, {
        scale: 1,
    })
});