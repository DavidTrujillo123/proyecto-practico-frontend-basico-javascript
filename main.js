const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const firstAside = aside.firstElementChild;
const secondAside = aside.lastElementChild;
const cardsConteiner = document.querySelector('.cards-container');
const productDetail = document.querySelector('.second-aside');
const closeProductDetail = document.querySelector('.product-detail-close');


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
    firstAside.classList.toggle('inactive');
    secondAside.classList.add('inactive');
}
function toggleProductsDetails(element){
    secondAside.classList.toggle('inactive');
    firstAside.classList.add('inactive');
    let img = element.children[0].getAttribute('src');
    let price = (element.children[1].children[0].children[0]).textContent;
    let named = (element.children[1].children[0].children[1]).textContent;

    info[0].setAttribute('src', img);
    info[2].innerText = price;
    info[3].innerText = named;

    secondAside.appendChild(info[0]);
    secondAside.appendChild(info[1]);
    secondAside.appendChild(info[4]);
    secondAside.appendChild(info[5]);
}
function cerrarVentanaHP(){
    secondAside.classList.toggle('inactive');
    firstAside.classList.add('inactive');
}
//arr -> array de productos
function renderProducts(productList){
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
 
        productCard.addEventListener('click', function(e){
            toggleProductsDetails(e.target.parentElement);
        });     
    }
    createElement();
} 
let info = [];
function createElement(){
    const Cimage = document.createElement('img');
    
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const subcircle1 = document.createElement('div');
    const subcircle2 = document.createElement('div');
    const subcircle3 = document.createElement('div');
    circle.append(subcircle1, subcircle2, subcircle3);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const Cprice = document.createElement('p');
    const Cname = document.createElement('p');
    const description = document.createElement('p');
    description.innerText = `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Nobis eum repudiandae quam 
        inventore laboriosam unde 
        asperiores ad eaque ratione saepe?`;
    productInfo.append(Cprice, Cname, description);

    const button = document.createElement('button');
    button.classList.add('primary-button');
    button.classList.add('add-to-cart-button');
    const imgButton = document.createElement('img');
    imgButton.setAttribute('src', './iconos/bt_add_to_cart.svg');
    button.innerText = "Add to cart";
    button.appendChild(imgButton);


    info.push(Cimage, circle, Cprice, Cname, productInfo, button);
    
}

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);
closeProductDetail.addEventListener('click', cerrarVentanaHP);

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike69',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 320,
    image: 'https://images.pexels.com/photos/4413762/pexels-photo-4413762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

renderProducts(productList);



