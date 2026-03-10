// Typing Animation

var typed = new Typed(".multiple-text", {
strings: [
"Problem Solver",
"Frontend Developer",
"Web Designer",
"JavaScript Developer"
],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});


// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// Close menu when link clicked

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

});

});


// Scroll Active Menu Highlight

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop-200;

if(pageYOffset>=sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){

e.preventDefault();

popup.style.display = "flex";

setTimeout(()=>{
popup.style.display = "none";
form.reset();
},3000);

});

function closePopup(){
popup.style.display = "none";
}