//Data

const products = [
{ //product 0
    image: `black-white-polka-dot.jpg`,
    saleType: `clearance`,
    name: `Polka Dots socks`,
    // faveButton: `faveButton0`,
    originalPrice: 999.99,
    newPrice: 599.99,
    descrip: `Fight fashion faux-pas by bringing socks and sandals back into style.`,
    style: `dots`,
    material: `cotton`,
    availability: `in stock`,
    small: `s0`,
    medium: `m0`,
    large: `l0`,
},{ //product 1
    image: `banana.jpg`,
    name: `Banana socks`,
    saleType: `clearance`,
    // faveButton: `faveButton1`,
    originalPrice: 799.99,
    newPrice: 499.99,
    descrip: `We, personally, would not wear bananas on our socks, but we're sure someone might.`,
    style: `pattern`,
    material: `polyester`,
    availability: `low stock`,
    small: `s1`,
    medium: `m1`,
    large: `l1`,
},{ //product 2
    image: `blue-orange.jpg`,
    name: `Abstract socks`,
    saleType: `clearance`,
    // faveButton: `faveButton2`,
    originalPrice: 899.99,
    newPrice: 299.99,
    style: `pattern`,
    descrip: `These socks are so great that you'll still look good even if you're only wearing one of them.`,
    material: `wool`,
    availability: `in stock`,
    small: `s2`,
    medium: `m2`,
    large: `l2`,
},{ //product 3
    image: `orange-blue-polka-dot.jpg`,
    name: `Fake ladybug`,
    saleType: `sale`,
    // faveButton: `faveButton3`,
    originalPrice: 199.99,
    newPrice: 50.99,
    descrip: `These are some massive polka dots. It reminds us of a ladybug, except the  colours are completely wrong.`,
    style: `dots`,
    material: `polyester`,
    availability: `out of stock`,
    small: `s3`,
    medium: `m3`,
    large: `l3`,
},{ //product 4
    image: `red-stripes.jpg`,
    name: `Candy cane socks`,
    saleType: `sale`,
    // faveButton: `faveButton4`,
    originalPrice: 499.99,
    newPrice: 399.99,
    descrip: `These socks are perfect for relaxing, as opposed to any other pair of socks.`,
    style: `stripes`,
    material: `cotton`,
    availability: `in stock`,
    small: `s4`,
    medium: `m4`,
    large: `l4`,
},{ //product 5
    image: `red-orange.jpg`,
    name: `Strawberry orange`,
    saleType: `sale`,
    // faveButton: `faveButton5`,
    originalPrice: 899.99,
    newPrice: 749.99,
    descrip: `Delicious.`,
    style: `stripes`,
    material: `polyester`,
    availability: `out of stock`,
    small: `s5`,
    medium: `m5`,
    large: `l5`,
},{ //product 6
    image: `classic-dots.jpg`,
    name: `Classic Dots`,
    saleType: `sale`,
    // faveButton: `faveButton6`,
    originalPrice: 199.99,
    newPrice: 99.99,
    descrip: `Perfect for all occasions.`,
    style: `dots`,
    material: `wool`,
    availability: `low stock`,
    small: `s6`,
    medium: `m6`,
    large: `l6`,
},{ //product 7
    image: `bunny-socks.jpg`,
    name: `Bunny socks`,
    saleType: `sale`,
    // faveButton: `faveButton7`,
    originalPrice: 299.99,
    newPrice: 149.99,
    descrip: `Stay warm by wearing rabbits on your feet.`,
    style: `specialty`,
    material: `wool`,
    availability: `in stock`,
    small: `s7`,
    medium: `m7`,
    large: `l7`,
},{ //product 8
    image: `yellow-polka-dot.jpg`,
    name: `Undercover socks`,
    saleType: `sale`,
    // faveButton: `faveButton8`,
    originalPrice: 499.99,
    newPrice: 399.99,
    descrip: `When you have an office job but still gotta look professional.`,
    style: `dots`,
    material: `cotton`,
    availability: `out of stock`,
    small: `s8`,
    medium: `m8`,
    large: `l8`,
},{ //product 9
    image: `swearing.jpg`,
    name: `Um, rude`,
    saleType: `sale`,
    // faveButton: `faveButton9`,
    originalPrice: 999.99,
    newPrice: 699.99,
    descrip: `To all the people who annoy you.`,
    style: `specialty`,
    material: `polyester`,
    availability: `out of stock`,
    small: `s9`,
    medium: `m9`,
    large: `l9`,
},{ //product 10
    image: `striped-hearts.jpg`,
    name: `Striped hearts`,
    saleType: `clearance`,
    // faveButton: `faveButton10`,
    originalPrice: 799.99,
    newPrice: 599.99,
    descrip: `When you can't decide between stripes or hearts.`,
    style: `stripes`,
    material: `cotton`,
    availability: `in stock`,
    small: `s10`,
    medium: `m10`,
    large: `l10`,
},{ //product 11
    image: `foot-glove.jpg`,
    name: `Foot glove`,
    saleType: `clearance`,
    // faveButton: `faveButton11`,
    originalPrice: 1249.99,
    newPrice: 999.99,
    descrip: `Sometimes you want gloves, but for your feet.`,
    style: `specialty`,
    material: `cotton`,
    availability: `low stock`,
    small: `s11`,
    medium: `m11`,
    large: `l11`,
},{ //product 12
    image: `girls-rule.jpg`,
    name: `Girls rule`,
    saleType: `sale`,
    // faveButton: `faveButton12`,
    originalPrice: 699.99,
    newPrice: 549.99,
    descrip: `Fight the patriarchy with your socks.`,
    style: `specialty`,
    material: `polyester`,
    availability: `in stock`,
    small: `s12`,
    medium: `m12`,
    large: `l12`,
},{ //product 13
    image: `doughnuts.jpg`,
    name: `Doughnuts`,
    saleType: `clearance`,
    // faveButton: `faveButton13`,
    originalPrice: 199.99,
    newPrice: 29.99,
    descrip: `We love doughnuts, and these socks.`,
    style: `pattern`,
    material: `polyester`,
    availability: `out of stock`,
    small: `s13`,
    medium: `m13`,
    large: `l13`,
},{ //product 14
    image: `tall-vine.jpg`,
    name: `Weird stockings`,
    saleType: `sale`,
    // faveButton: `faveButton14`,
    originalPrice: 129.99,
    newPrice: 119.99,
    descrip: `Stay warm with these extra long socks.`,
    style: `specialty`,
    material: `wool`,
    availability: `in stock`,
    small: `s14`,
    medium: `m14`,
    large: `l14`,
},{ //product 15
    image: `fuzzy-colourful.jpg`,
    name: `Rainbow`,
    saleType: `sale`,
    // faveButton: `faveButton15`,
    originalPrice: 1199.99,
    newPrice: 1099.99,
    descrip: `Extra warm, extra fuzzy, extra colourful.`,
    style: `specialty`,
    material: `wool`,
    availability: `out of stock`,
    small: `s15`,
    medium: `m15`,
    large: `l15`,
},{ //product 16
    image: `abstract.jpg`,
    name: `Abstract`,
    saleType: `sale`,
    // buttonId: `faveButton16`,
    originalPrice: 499.99,
    newPrice: 379.99,
    descrip: `Show your artsy side with these strangely-patterned socks.`,
    style: `pattern`,
    material: `cotton`,
    availability: `low stock`,
    small: `s16`,
    medium: `m16`,
    large: `l16`,
},{ //product 17
    image: `cassettes.jpg`,
    name: `Blast from the past`,
    saleType: `sale`,
    // faveButton: `faveButton17`,
    originalPrice: 849.99,
    newPrice: 749.99,
    descrip: `Go back to uh whenever cassettes were popular with these socks.`,
    style: `pattern`,
    material: `polyester`,
    availability: `out of stock`,
    small: `s17`,
    medium: `m17`,
    large: `l17`,
},{ //product 18
    image: `colourful-dots.jpg`,
    name: `Colourful dots`,
    saleType: `sale`,
    // faveButton: `faveButton18`,
    originalPrice: 19.99,
    newPrice: 18.99,
    descrip: `Brighten up your office with these socks.`,
    style: `dots`,
    material: `cotton`,
    availability: `in stock`,
    small: `s18`,
    medium: `m18`,
    large: `l18`,
},{ //product 19
    image: `cactus.jpg`,
    name: `Cactus cowboy`,
    saleType: `sale`,
    // faveButton: `faveButton19`,
    originalPrice: 749.99,
    newPrice: 699.99,
    descrip: `Yeehaw.`,
    style: `pattern`,
    material: `polyester`,
    availability: `low stock`,
    small: `s19`,
    medium: `m19`,
    large: `l19`,
}
];






//Functionality

//Sort
function isASortOption(product) {
    if (this == 'saleType') {
        return true;
    } else if (product.saleType == this) {
        return true;
    } else {
        return false;
    }
}


//Filter style
function isAFilterStyle (product) {
    if (this == 'style') {
        return true;
    } else if (product.style == this){
        return true;
    } else {
        return false;
    }
}

//Filter material
function isAFilterMaterial (product) {
    if (this == 'material') {
        return true;
    } else if (product.material == this){
        return true;
    } else {
        return false;
    }
}

//Filter availability
function isAFilterAvailability (product) {
    if (this == `availability`) {
        return true;
    } else if (product.availability == this) {
        return true;
    } else {
        return false;
    }
}

//Search products 
function isMatchingName(product) {
    if (product.name.toUpperCase().includes(this.trim().toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }


function loadProducts(product) {

//Product availability coloured classes
let availabilityclass; 

if (product.availability == `in stock`) {
    availabilityclass = `class="stock-tag stock-available"`;
} else if (product.availability == `low stock`) {
    availabilityclass = `class="stock-tag stock-low"`;
} else {
    availabilityclass = `class="stock-tag stock-none"`;
}


//type of sale 
let saletagClass;

if (product.saleType == `sale`) {
    saletagClass = `class="sale-tag sale-normal"`;
} else {
    saletagClass = `class="sale-tag sale-clearance"`;
}


//faveButton

     

    return `<article class="product">
                <header class="image-container">
                    <img src=img/${product.image} alt="Product Image" class="product-image">
                    <p ${saletagClass}>${product.saleType}</p>
                </header>
                <h3 class="product-name">${product.name}</h3>
                <button id="faveButton" class="fave-button" type="button"> <!-- id="faveButton" -->
                        <span id="faveColour" class="fave-colour fas fa-heart unfavourited"></span> <!-- id="faveColour" -->
                </button>
                <data class="product-price" value="39"><del>$${product.originalPrice}</del> <ins>$${product.newPrice}</ins></data>
                <p class="product-descrip">${product.descrip}</p>
                <ul class="product-info">
                <li><strong>Style: </strong>${product.style}</li> 
                <li><strong>Material: </strong>${product.material}</li>
                <li><strong>Availability: </strong><em ${availabilityclass}>${product.availability}</em></li>
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

//map
function renderProducts(arrToRender) {
    const arrOfHtmlProducts = arrToRender.map(loadProducts);
    const strOfHtmlProducts = arrOfHtmlProducts.join(`\n`);
    document.getElementById('products').innerHTML = strOfHtmlProducts;
}

//Execution

renderProducts(products);





// Toggle menu OPEN
// function toggleMenu () {
//     document.getElementById().
// }



//Open and close the menu
function toggleMenuOpen() {
    // console.log(`click`);
    document.getElementById(`menuPanel`).classList.toggle(`menu-panel`); 
}
//Open and close the menu
document.getElementById(`toggleViewOpen`).addEventListener(`click`, toggleMenuOpen);


//Change the menu icon when you open and close
function toggleMenuIcon() {
    document.getElementById(`menuIcon`).classList.toggle(`fa-times`);
}
//Change the menu icon when you open and close
document.getElementById(`menuIcon`).addEventListener(`click`, toggleMenuIcon);











//SORT
function showSales (event) {
    const selectedSale = event.target.value;
    renderProducts(products.filter(isASortOption,selectedSale));
}


//FILTERS

//Filter style
function showFilteredStyles (event) {
    const selectedFilterStyle = event.target.value;
    renderProducts(products.filter(isAFilterStyle, selectedFilterStyle));
}

//Filter material
function showFilteredMaterials (event) {
    const selectedFilterMaterial = event.target.value;
    renderProducts(products.filter(isAFilterMaterial, selectedFilterMaterial));
}

//Filter availability
function showFilteredAvailability (event) {
    const selectedFilterAvailability = event.target.value;
    renderProducts(products.filter(isAFilterAvailability, selectedFilterAvailability));
}

//SEARCH products
function showSearchedProducts(event) {
    const searchedProduct = event.target.value; 
    renderProducts(products.filter(isMatchingName, searchedProduct));
  }

//ADD TO FAVOURITES but with ID
function addToFavourites(){
    // console.log(`click`);
    document.getElementById(`faveColour`).classList.toggle(`favourited`);
}
// document.getElementbyId(`faveButton`).addEventListener(`click`, addToFavourites);

// function addToFavourites() {
//     document.getElementbyId(`faveColour`).classList.toggle(`favourited`);
// }


//NEED TO PUT IDS BACK IN THE HTML
// Add product to favourites
// function addToFavourites() {
//     console.log(`click`);
//     document.getElementsByClassName(`fave-colour`).classList.toggle(`favourited`); 
// }
// document.getElementsByClassName(`fave-button`).addEventListener(`click`, addToFavourites);


//FOOTER DROPDOWNS

//Changing footer dropdown open/close icon
function changeFtrDropdownIcon0 () {
    document.getElementById(`ftrDropdownIcon0`).classList.toggle(`fa-times-circle`);
} 
function changeFtrDropdownIcon1 () {
    document.getElementById(`ftrDropdownIcon1`).classList.toggle(`fa-times-circle`);
} 
function changeFtrDropdownIcon2 () {
    document.getElementById(`ftrDropdownIcon2`).classList.toggle(`fa-times-circle`);
} 
function changeFtrDropdownIcon3 () {
    document.getElementById(`ftrDropdownIcon3`).classList.toggle(`fa-times-circle`);
} 

//changing footer dropdown open/close icon
document.getElementById(`labelDropdown0`).addEventListener(`click`, changeFtrDropdownIcon0); 
document.getElementById(`labelDropdown1`).addEventListener(`click`, changeFtrDropdownIcon1); 
document.getElementById(`labelDropdown2`).addEventListener(`click`, changeFtrDropdownIcon2); 
document.getElementById(`labelDropdown3`).addEventListener(`click`, changeFtrDropdownIcon3); 





//opening footer dropdown 
function toggleFtrDropdown0() {
    document.getElementById(`listDropdown0`).classList.toggle(`footer-dropdown-open`);
}
function toggleFtrDropdown1() {
    document.getElementById(`listDropdown1`).classList.toggle(`footer-dropdown-open`);
}
function toggleFtrDropdown2() {
    document.getElementById(`listDropdown2`).classList.toggle(`footer-dropdown-open`);
}
function toggleFtrDropdown3() {
    document.getElementById(`listDropdown3`).classList.toggle(`footer-dropdown-open`);
}

//opening footer dropdown
document.getElementById(`labelDropdown0`).addEventListener(`click`, toggleFtrDropdown0);
document.getElementById(`labelDropdown1`).addEventListener(`click`, toggleFtrDropdown1);
document.getElementById(`labelDropdown2`).addEventListener(`click`, toggleFtrDropdown2);
document.getElementById(`labelDropdown3`).addEventListener(`click`, toggleFtrDropdown3);


//EXECUTABLES

//Toggle


//Sort
document.getElementById('sort').addEventListener('change', showSales);


//Filtering
document.getElementById('filterStyle').addEventListener('change', showFilteredStyles);

document.getElementById('filterMaterial').addEventListener('change', showFilteredMaterials);

document.getElementById('filterAvailability').addEventListener('change', showFilteredAvailability);




//Search
document.getElementById('searchProducts').addEventListener('input', showSearchedProducts);




//Favourites
document.getElementById(`faveButton`).addEventListener(`click`, addToFavourites);


//Footer dropdowns
