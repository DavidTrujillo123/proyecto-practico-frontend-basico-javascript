const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const closeDetailIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsConteiner = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetailContainer');

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
}
function closeDetailContainer(){
    productDetailContainer.classList.add('inactive');
}
function openProductDetail(element){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

    let detailsInfo = getInfoProductDetail(element);
    
    //Funcion que pone la informacion de los productos
    setProductDetail(detailsInfo);

    //insersion de img, circles, productoInfo
    productDetailContainer.append(elementProductDetail[0], elementProductDetail[3], elementProductDetail[4]);
    
}
function setProductDetail(elementInfo){
    let img = elementInfo[0];//posicion de la img
    let price = elementInfo[1];//posicion txt price
    let name = elementInfo[2];//posicion txt name
    
    elementProductDetail[0].setAttribute('src', img);
    elementProductDetail[1].innerText = price;
    elementProductDetail[2].innerText = name;
    
}
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

        //Evento click con una funcion anonima que mediante 
        //el parametro event (parametro de la misma funcion)
        //nos regrese el elemento padre de la imagen es decir el 
        //contenedor product-card donde esta toda la información
        productImg.addEventListener('click', function(event){
            openProductDetail(event.target.parentNode);
        });

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

//Funcion que me retorna la informacion: img(la url de la imagen)
//price(precio en string), name(nombre del producto en string)
function getInfoProductDetail(element){
    let img = element.querySelector('img').src;
    let detail = element.querySelector('.product-info div');
    let price =  detail.firstChild.textContent;
    let name = detail.lastChild.textContent;
    return [img, price, name]; 
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

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardAside);
closeDetailIcon.addEventListener('click', closeDetailContainer);
renderProducts(productList);



