const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
function toggleMenu() {
    menu.classList.toggle("menu_opened");
}
closeMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("click", toggleMenu);


const menulinks = document.querySelectorAll('.menu a[href^=\"#"]');

const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        if (entry.isIntersecting){
            menuLink.classList.add("selected");
        }
        else{
            menuLink.classList.remove("selected");
        }
    });
}, {rootMargin: "-50% 0px -50% 0px"});
menulinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if ( target){
        observe.observe(target);
    }
})
