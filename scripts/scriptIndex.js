const imageContainer = document.querySelector("#imageContainer")

function VeranderFoto() {
  const scrollPosition = window.scrollY; //laat weten hoeveel pixel er gescrolled is

  if (scrollPosition > 0.1) { // als er meer dan 10 pixel voegt de class scrolled toe
    imageContainer.classList.add("scrolled"); //voeg class scrolled toe
  } else {
    imageContainer.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", VeranderFoto); //elke keer als de er gescrolled wordt zal de function uitgevoerd worden