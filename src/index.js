import loadPage from './loadPage';
import createAboutPage from './aboutPage';
import createMenuPage from './menuPage';


const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");
const btnAbout = document.querySelector(".about");

loadPage();

btnHome.addEventListener("click", () => {
    loadPage();
});

btnMenu.addEventListener("click", () => {
    createMenuPage();
})

btnAbout.addEventListener("click", () => {
    createAboutPage();
})

//loadpage

