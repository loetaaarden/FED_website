var openButton = document.querySelector("header section button"); 
var sluitButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");
const details = document.querySelectorAll("details"); //selecteert alle details

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

details.forEach((detail) => { //checkt elke detail
    detail.addEventListener("toggle", () => { // elke detail krijgt eventlistner toggle die getriggerd word als de detail open of dicht wordt gedaan
      if (detail.open) EenOpen(detail); //word gecontroleerd of the detail geopen is, als dit zo is wordt de functie uitgevoerd
    });
});

function EenOpen(OpenDetail) {
    details.forEach((detail) => { 
      if (detail !== OpenDetail) { //checkt of de andere details hetzelffde zijn als die je net hebt geopent (dus of ze open zijn) 
        detail.open = false; //sluit de gelijke detail
      }
    });
} // bron:https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai

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

