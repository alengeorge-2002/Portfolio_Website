// Theme Switch 
function light() {
    document.body.classList.remove("dark-mode")
    document.getElementById("light").style.display = "none"
    document.getElementById("dark").style.display = "block"
}
function dark() {
    document.body.classList.add("dark-mode")
    document.getElementById("dark").style.display = "none"
    document.getElementById("light").style.display = "block"
}

function navtoggle() {
    document.querySelector(".bar").classList.toggle("active")
}

// Multi Tag line - Updated to Software Development focus
var typingEffect = new Typed(".multiText", {
    strings: ["MCA Student", "Software Developer", "React Native Developer", "Python Enthusiast"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

// Scroll Animation
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Loader Animation 
var loadtime;
function loader() {
    loadtime = setTimeout(showPage, 2000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("nav").style.display = "flex";
}
function showhome() {
    setTimeout(function () {
        document.getElementById("home").classList.add('active');
    }, 2100);
}

// Copyright Date
document.getElementById("copy").innerHTML = new Date().getFullYear();

// FAQ related JS
var acc = document.getElementsByClassName("accordion2");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
