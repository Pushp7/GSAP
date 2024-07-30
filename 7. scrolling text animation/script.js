function marqueeAnimation() {
    window.addEventListener("wheel", function(e){
        if(e.deltaY > 0){
            // console.log('Seedha scrolling');
            gsap.to(".marquee", {
                transform: "translateX(-200%)",
                duration: 7,
                repeat: -1,
                ease: "none"
            })
    
            gsap.to(".marquee img", {
                rotate: 180,
            })
        }
        else{
            // console.log('Ulta scrolling');
            gsap.to(".marquee", {
                transform: "translateX(0%)",
                duration: 7,
                repeat: -1,
                ease: "none"
            })
    
            gsap.to(".marquee img", {
                rotate: 0,
            })
        }
    })
}

marqueeAnimation()
