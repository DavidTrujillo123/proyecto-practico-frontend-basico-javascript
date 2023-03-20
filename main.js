const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const closeDetailIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsConteiner = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetailContainer');
const myOrderContent = document.querySelector('.my-order-content');

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
    let isCardAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    if(isCardAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleCardAside(){
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    console.log(cartList);
}
function openProductDetail(object){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    //Desestructuracion del array elementProductDetail
    let [productDetailImg, productPrice, productName, circle, productInfo] = elementProductDetail; 
    //Asiganacion de elementos
    productDetailImg.src = object.image;
    productPrice.innerText = object.price;
    productName.innerText = object.name;
    //Agregar al contenedor
    productDetailContainer.append(productDetailImg, circle, productInfo);
}
function closeDetailContainer(){
    productDetailContainer.classList.add('inactive');
}
function setProductDetail(object, element){
    element.addEventListener('click', () => {
        openProductDetail(object);
    });
}
let cartList = [];
function setButtonShopping(object, element){
    element.addEventListener('click', () => {
        cartList.push(object);
        createElementShoppingCart(object, myOrderContent);
    });
}
// function addItems(){
//     console.log(cartList);
// }
//arr -> array de productos
function renderProducts(arr){
    for(product of arr){
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

        setProductDetail(product, productImg);
        setButtonShopping(product, productImgCart);
    }
    createElementDetail(); 
} 

let elementProductDetail = [];
//Funcion que crea los elemetos.
//Retorna un array con : [0]img*, [1](los circulos pequños abajo de la img)
//[2]price*, [3]name*, [4]info(puesta automaticamente)
// * = debe colocarse dependiendo del producto
function createElementDetail(){
    const productDetailImg = document.createElement('img');
    
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const subcircle1 = document.createElement('div');
    const subcircle2 = document.createElement('div');
    const subcircle3 = document.createElement('div');
    circle.append(subcircle1, subcircle2, subcircle3);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPrice = document.createElement('p');
    
    const productName = document.createElement('p');

    const description = document.createElement('p');

    description.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eum repudiandae quam inventore laboriosam unde asperiores ad eaque ratione saepe?";

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('primary-button');
    primaryButton.classList.add('add-to-cart-button');

    const imgButton = document.createElement('img');
    imgButton.setAttribute('src', './iconos/bt_add_to_cart.svg');

    primaryButton.innerText = "Add to cart";
    primaryButton.appendChild(imgButton);

    productInfo.append(productPrice, productName, description, primaryButton);

    elementProductDetail.push(productDetailImg, productPrice, productName, circle, productInfo);
}
function createElementShoppingCart(object, element){
    const shopingCard = document.createElement('div');
    shopingCard.classList.add('shopping-card');

    const figureShopping = document.createElement('figure');

    const shoppingImage = document.createElement('img');
    shoppingImage.setAttribute('src', object.image);

    const shopingName = document.createElement('p');
    shopingName.innerText = object.name;

    const shopingPrice = document.createElement('p');
    shopingPrice.innerText = object.price;

    const shoppingIconClose = document.createElement('img');
    shoppingIconClose.setAttribute('src', './iconos/icon_close.png');
    shoppingIconClose.addEventListener('click', () =>{
        deleteItemShopping(object, shopingCard);
    });

    figureShopping.appendChild(shoppingImage);
    shopingCard.append(figureShopping, shopingName, shopingPrice, shoppingIconClose);
    
    element.appendChild(shopingCard);
}
function deleteItemShopping(object, element){
    let index = cartList.indexOf(object);
    cartList.splice(index, 1);
    element.remove();    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'PC',
    price: 720,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Airpods',
    price: 220,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'PC',
    price: 720,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Airpods',
    price: 220,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);
closeDetailIcon.addEventListener('click', closeDetailContainer);
renderProducts(productList);



