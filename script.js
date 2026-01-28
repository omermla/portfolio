let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: [
        'Software Engineering Student at Eastern Mediterranean University (EMU).',
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: false,
});


const readMoreBtn = document.getElementById("readMoreBtn");
const aboutMore = document.getElementById("aboutMore");

readMoreBtn.addEventListener("click", () => {
  if (aboutMore.style.display === "none" || aboutMore.style.display === "") {
    aboutMore.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    aboutMore.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

