// JavaScript Document
console.log("hi");

var openButton = document.querySelector(".hamburger");
var sluitButton = document.querySelector("nav button");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

// Functie om het menu te openen en te sluiten
function openMenu() {
    // Selecteer de nav
    var deNav = document.querySelector("nav");
    
    // Toggle de class toonMenu op de nav zodat de css de nav kan laten zien of verbergen
    deNav.classList.toggle("toonMenu");
    
    // Als de nav wordt getoond, dan wordt de scroll van de body uitgezet
    // Als de nav wordt verborgen, dan wordt de scroll van de body weer aangezet
    if (deNav.classList.contains("toonMenu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = document.body.style.overflow === "hidden" ? "" : "auto";
    }
}

function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
