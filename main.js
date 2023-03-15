const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMovileMenu(){
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
hamburgerIcon.addEventListener('click', toggleMovileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);