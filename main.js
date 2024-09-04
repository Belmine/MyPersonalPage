let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
let hamburger_div = document.querySelector(".menu-icon");

// Ajoute un événement de clic sur l'icône
hamburger_div.addEventListener("click", function() {
    // Sélectionne l'élément <i> à l'intérieur du div
    let icon = hamburger_div.querySelector("i");

    // Vérifie la classe actuelle de l'icône et la remplace par l'autre
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

    // Optionnel : Vous pouvez appeler une fonction ici pour gérer l'affichage du menu
    toggleMenu();
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".header__icons", {
    ...scrollRevealOption,
    delay: 2000,
  });


  
  