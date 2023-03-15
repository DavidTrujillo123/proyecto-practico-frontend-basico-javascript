const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toggleDesktopMenu(){
    let isMenuDesktopOpen = !desktopMenu.classList.contains('inactive');
    if(isMenuDesktopOpen){
        // setTimeout() => funcion de javascrit donde al pasar un 
        //tiempo se ejecuta la función
        //Cuando termine la animacion añade la clase inactive
        setTimeout(() => {
           desktopMenu.classList.add('inactive'); 
        }, 500);
    }
    else{
        //Como ya sabemos que es menu esta cerrado por la
        //condicion solo lo removemos la clase inactive
        desktopMenu.classList.remove('inactive');
    }
    //Añade las animaciones de abrir o cerrar, la
    //clase animationClose debe estar en el html
    desktopMenu.classList.toggle('animacionOpen');
    desktopMenu.classList.toggle('animacionClose');
}
function toggleMobileMenu(){
    let isCardAsideOpen = !aside.classList.contains('inactive');
    if(isCardAsideOpen){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCardAside(){
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);