const openButton = document.querySelector("header section button"); 
const sluitButton = document.querySelector("nav button");
const deNav = document.querySelector("nav");
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
  document.body.style.overflow = "hidden"; //stops scrolling
  deNav.classList.toggle("toonMenu"); //adds a class to nav
}

function sluitMenu() {
  for(let i=0; i<details.length; i++) { // checkt voor elke details of die nog open is
     details[i].removeAttribute("open"); // als dat zo is haalt die de open weg
  } // hier heb ik hulp van mariska bij gekregen

  deNav.classList.remove("toonMenu");
  document.body.style.overflow = "auto";
}