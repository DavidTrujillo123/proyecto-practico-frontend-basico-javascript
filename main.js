const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsConteiner = document.querySelector('.cards-container')

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
//arr -> array de productos
function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './iconos/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsConteiner.appendChild(productCard);
    }
} 

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

renderProducts(productList);



