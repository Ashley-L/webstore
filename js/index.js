//Data

const products = [
{ //product 0
    image: `black-white-polka-dot.jpg`,
    name: `Polka Dots socks`,
    // fave: `0`,
    originalPrice: `$999.99`,
    newPrice: `$599.99`,
    descrip: `Fight fashion faux-pas by bringing socks and sandals back into style.`,
    style: `Dots`,
    material: `Cotton`,
    availability: `In stock`,
    small: `s0`,
    medium: `m0`,
    large: `l0`,
},{ //product 1
    image: `banana.jpg`,
    name: `Banana socks`,
    // fave: `1`,
    originalPrice: `$799.99`,
    newPrice: `$499.99`,
    descrip: `We, personally, would not wear bananas on our socks, but we're sure someone might.`,
    style: `Pattern`,
    material: `Polyester`,
    availability: `Low stock`,
    small: `s1`,
    medium: `m1`,
    large: `l1`,
},{ //product 2
    image: `blue-orange.jpg`,
    name: `Abstract socks`,
    // fave: `2`,
    originalPrice: `$899.99`,
    newPrice: `$299.99`,
    style: `Dots`,
    descrip: `These socks are so great that you'll still look good even if you're only wearing one of them.`,
    material: `Wool`,
    availability: `In stock`,
    small: `s2`,
    medium: `m2`,
    large: `l2`,
},{ //product 3
    image: `orange-blue-polka-dot.jpg`,
    name: `Fake ladybug`,
    // fave: `3`,
    originalPrice: `$199.99`,
    newPrice: `$50.99`,
    descrip: `These are some massive polka dots. It reminds us of a ladybug, except the  colours are completely wrong.`,
    style: `Dots`,
    material: `Polyester`,
    availability: `Out of stock`,
    small: `s3`,
    medium: `m3`,
    large: `l3`,
},{ //product 4
    image: `red-stripes.jpg`,
    name: `Candy cane socks`,
    // fave: `4`,
    originalPrice: `$499.99`,
    newPrice: `$399.99`,
    descrip: `These socks are perfect for relaxing, as opposed to any other pair of socks.`,
    style: `Stripes`,
    material: `Cotton`,
    availability: `In stock`,
    small: `s4`,
    medium: `m4`,
    large: `l4`,
},{ //product 5
    image: `red-orange.jpg`,
    name: `Strawberry orange`,
    // fave: `5`,
    originalPrice: `$899.99`,
    newPrice: `$749.99`,
    descrip: `Delicious.`,
    style: `Stripes`,
    material: `Polyester`,
    availability: `Out of stock`,
    small: `s5`,
    medium: `m5`,
    large: `l5`,
},{ //product 6
    image: `classic-dots.jpg`,
    name: `Classic Dots`,
    // fave: `6`,
    originalPrice: `$199.99`,
    newPrice: `$99.99`,
    descrip: `Perfect for all occasions.`,
    style: `Dots`,
    material: `Wool`,
    availability: `Low stock`,
    small: `s6`,
    medium: `m6`,
    large: `l6`,
},{ //product 7
    image: `bunny-socks.jpg`,
    name: `Bunny socks`,
    // fave: `7`,
    originalPrice: `$299.99`,
    newPrice: `$149.99`,
    descrip: `Stay warm by wearing rabbits on your feet.`,
    style: `Specialty`,
    material: `Wool`,
    availability: `In stock`,
    small: `s7`,
    medium: `m7`,
    large: `l7`,
},{ //product 8
    image: `yellow-polka-dot.jpg`,
    name: `Undercover socks`,
    // fave: `8`,
    originalPrice: `$499.99`,
    newPrice: `$399.99`,
    descrip: `When you have an office job but still gotta look professional.`,
    style: `Dots`,
    material: `Cotton`,
    availability: `Out of stock`,
    small: `s8`,
    medium: `m8`,
    large: `l8`,
},{ //product 9
    image: `swearing.jpg`,
    name: `Um, rude`,
    // fave: `9`,
    originalPrice: `$999.99`,
    newPrice: `$699.99`,
    descrip: `To all the people who annoy you.`,
    style: `Specialty`,
    material: `Polyester`,
    availability: `Out of stock`,
    small: `s9`,
    medium: `m9`,
    large: `l9`,
} 
]

//<span class="far fa-heart"></span>


//Functionality
function loadProducts(product) {
    return `<article class="product">
                <header class="image-container">
                    <img src=img/${product.image} alt="Product Image" class="product-image">
                    <p class="sale-tag">sale</p>
                </header>
                <h3 class="product-name">${product.name}</h3>
                <button id="faveButton" class="fave-button" type="button">
                        <span id="faveColour" class="fas fa-heart unfavourited"></span>
                </button>
                <data class="product-price" value="39"><del>${product.originalPrice}</del> <ins>${product.newPrice}</ins></data>
                <p class="product-descrip">${product.descrip}</p>
                <ul class="product-info">
                <li><strong>Style: </strong>${product.style}</li> 
                <li><strong>Material: </strong>${product.material}</li>
                <li><strong>Availability: </strong>${product.availability}</li>
                </ul>
                <form class="product-buy">
                <fieldset id="prodSize" class="product-size">
                    <!-- <legend>Sizes</legend> -->
                    <input type="radio" id="${product.small}" name="size" value="${product.small}"><label for="${product.small}">S</label>
                    <input type="radio" id="${product.medium}" name="size" value="${product.medium}"><label for="${product.medium}">M</label>
                    <input type="radio" id="${product.large}" name="size" value="${product.large}"><label for="${product.large}">L</label>
                </fieldset>
                <div id="quantityBar" class="quantity-bar">
                    <input class="quantity-button" type="button" name="decrease" value="-"> 
                    <input class="quantity-input" type="number" name="number" value="1">
                    <input class="quantity-button" type="button" name="increase" value="+"> 
                </div>

                <footer class="product-cart">
                    <button type="button">Add to Cart</button>
                    <!-- <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button> -->
                    <!-- <a href="#">see more</a> -->
                </footer>
                </form>
            </article>`;
}

function renderProducts(arrToRender) {
    const arrOfHtmlProducts = arrToRender.map(loadProducts);
    const strOfHtmlProducts = arrOfHtmlProducts.join(`\n`);
    document.getElementById('products').innerHTML = strOfHtmlProducts;
}

//Execution
// document.getElementById('product').innerHTML = loadProducts(products[0])
// document.getElementById('product').innerHTML += loadProducts(products[1])
// document.getElementById('product').innerHTML += loadProducts(products[2])
// document.getElementById('product').innerHTML += loadProducts(products[3])
// document.getElementById('product').innerHTML += loadProducts(products[4])

// const arrOfHtmlProducts = products.map(loadProducts);
// const strOfHtmlroducts = arrOfHtmlProducts.join(`\n`);
// document.getElementById('product').innerHTML = strOfHtmlroducts;

renderProducts(products);



// Add product to favourites
function addToFavourites() {
    // console.log(`click`);
    document.getElementById(`faveColour`).classList.toggle(`favourited`); 
}
// document.getElementById(`faveButton`).addEventListener(`click`, addToFavourites);
document.getElementById(`faveButton`).addEventListener(`click`, addToFavourites);




// Toggle menu OPEN
function toggleMenuOpen() {
    // console.log(`click`);
    document.getElementById(`menuPanel`).classList.toggle(`menu-panel`); 
}
document.getElementById(`toggleViewOpen`).addEventListener(`click`, toggleMenuOpen);

// Toggle menu CLOSE
function toggleMenuClose() {
    document.getElementById(`menuPanel`).classList.toggle(`menu-panel`); 
}
document.getElementById(`toggleViewClose`).addEventListener(`click`, toggleMenuClose);






// function toggleMenu() {
//     console.log(`click`);
//     document.getElementById(`menuPanel`).classList.toggle(`menu-items`);
// }


// For toggle
// renderMenu(menuPanel)
// document.getElementById(`toggleView`).addEventListener(`click`, toggleMenu); //add toggleView to your button