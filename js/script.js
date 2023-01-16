let bar = document.getElementById("nav-hidden");
let submit = document.getElementById("submit-form");
let contactForm = document.getElementById("contact-form");
let thankDisplay = document.getElementById("thank-display");

bar.addEventListener("click", () => {
    if (document.getElementsByClassName("nav-left")[0].style.display == "flex") {
        document.getElementsByClassName("nav-left")[0].style.display = "none";
        document.getElementsByClassName("nav-right")[0].style.display = "none";
    } else {
        document.getElementsByClassName("nav-left")[0].style.display = "flex";
        document.getElementsByClassName("nav-right")[0].style.display = "flex";
    }
})

submit.addEventListener("click", () => {
    contactForm.style.display = "none";
    thankDisplay.style.display = "block";
})