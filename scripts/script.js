// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header section button"); 
var sluitButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");
const details = document.querySelectorAll("details");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu() {
    
    document.body.style.overflow = "hidden";
    deNav.classList.toggle("toonMenu");
}

function sluitMenu() {
    for(let i=0; i<details.length; i++) {
        details[i].removeAttribute("open"); 
    }
    // hier heb ik hulp van mariska bij gekregen
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
    document.body.style.overflow = "auto";
}

