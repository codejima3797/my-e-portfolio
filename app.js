//template_yyf2h2d
//service_9y03ajl
//lAbFCbYI-0JqbyQ0E

let isPanelOpen = false
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".panel__overlay--loading")
    const success = document.querySelector(".panel__overlay--success")
    loading.classList += " panel__overlay--visible"
    emailjs
    .sendForm(
        "service_9y03ajl",
        "template_d2vsvvq",
        event.target,
        "lAbFCbYI-0JqbyQ0E"
    ).then(() => {
        loading.classList.remove("panel__overlay--visible");
        success.classList += " panel__overlay--visible";
     }).catch(() => {
        loading.classList.remove("panel__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at jgray3797@gmail.com"
        );
     })
}

function togglePanel() {
    if (isPanelOpen) {
        isPanelOpen = false;
        return document.body.classList.remove("panel--open");
    }
    isPanelOpen = true
    document.body.classList += " panel--open";
}