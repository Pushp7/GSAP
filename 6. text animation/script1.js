function breakText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splittedText = h1Text.split("")

    var clutter = "";

    var halflength = splittedText.length / 2
    splittedText.forEach(function (text, index) {
        if (index < halflength)
            clutter += `<span class="left-stagger">${text}</span>`;
        else
            clutter += `<span class="right-stagger">${text}</span>`;
    })

    h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .left-stagger", {
    y: 150,
    stagger: 0.12,
    opacity: 0,
    duration: 0.6,
})

gsap.from("h1 .right-stagger", {
    y: 150,
    stagger: -0.12,
    opacity: 0,
    duration: 0.6,
})
