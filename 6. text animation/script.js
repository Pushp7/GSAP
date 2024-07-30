function breakText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    // console.log(h1);
    // console.log(h1Text);

    var splittedText = h1Text.split("")
    // console.log(splittedText);

    var clutter = "";

    splittedText.forEach(function (text) {
        clutter += `<span>${text}</span>`;
    })

    h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 span", {
    y: 150,
    stagger: 0.12,
    // stagger: -0.12,
    opacity: 0,
    duration: 0.6,
})
