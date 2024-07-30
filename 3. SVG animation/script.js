var path = `M 10 125 Q 500 125 850 125`
var finalPath = `M 10 125 Q 500 125 850 125`

var string = document.querySelector("svg")

string.addEventListener("mousemove", function(dets){
    path = `M 10 125 Q ${dets.x} ${dets.y} 850 125`
    // console.log(path);
    gsap.to("svg path", {
        attr: {d: path},        //attr changes the value of attribute of any element
        duration: 0.1,
        ease: "power3.out",
    }) 
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 2,
        ease: "elastic.out(1,0.1)",
    }) 
})


//reference:    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
//reference:    https://gsap.com/resources/getting-started/Easing