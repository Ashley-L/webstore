const product0 = {
    prodImage: `img/black-white-polka-dot.jpg`,
    prodName: `Polka Dots socks`,
    prodOriginalPrice: `$999.99`,
    prodNewPrice: `$599.99`,
    prodDescrip: `Fight fashion faux-pas by brining socks and sandals back into style.`,
    prodMaterial: `Cotton`,
    prodAvailability: `In stock`,
};

const product1 = {
    prodImage: `img/banana.jpg`,
    prodName: `Banana socks`,
    prodOriginalPrice: `$799.99`,
    prodNewPrice: `$499.99`,
    prodDescrip: `We, personally, would not wear bananas on our socks, but we're sure someone might.`,
    prodMaterial: `Polyester`,
    prodAvailability: `Low stock`,
};

const product2 = {
    prodImage: `img/blue-orange.jpg`,
    prodName: `Some kind of patterned socks`,
    prodOriginalPrice: `$899.99`,
    prodNewPrice: `$299.99`,
    prodDescrip: `These socks are so great that you'll still look good even if you're only wearing one of them.`,
    prodMaterial: `Wool`,
    prodAvailability: `In stock`,
};

const product3 = {
    prodImage: `img/orange-blue-polka-dot.jpg`,
    prodName: `Fake ladybug`,
    prodOriginalPrice: `$199.99`,
    prodNewPrice: `$50.99`,
    prodDescrip: `These are some massive polka dots. It reminds us of a ladybug, except the  colours are completely wrong.`,
    prodMaterial: `Polyester`,
    prodAvailability: `Out of stock`,
};

const product4 = {
    prodImage: `img/red-stripes.jpg`,
    prodName: `Candy cane socks`,
    prodOriginalPrice: `$499.99`,
    prodNewPrice: `$399.99`,
    prodDescrip: `These socks are perfect for relaxing, as opposed to any other pair of socks.`,
    prodMaterial: `Cotton`,
    prodAvailability: `In stock`,
};

function loadProducts(product) {
    return `<article class="product">
                <header class="prodimage-container">
                    <img src=${product.prodImage} alt="Product Image" class="product-image">
                    <button class="fave-button" type="button">
                        <span class="far fa-heart"></span>
                    </button>
                <p class="sale-tag">sale</p>
                </header>
                <h3 class="product-name">${product.prodName}</h3>
                <data class="product-price" value="39"><del>${product.prodOriginalPrice}</del> <ins>${product.prodNewPrice}</ins></data>
                <p>${product.prodDescrip}</p>
                <ul>
                <li"><strong>Material: </strong>${product.prodMaterial}</li">
                <li><strong>Availability: </strong>${product.prodAvailability}</li>
                </ul>
                <form>
                <fieldset id="prodSize" class="product-size">
                    <!-- <legend>Sizes</legend> -->
                    <input type="radio" id="s" name="size" value="s"><label for="s">S</label>
                    <input type="radio" id="m" name="size" value="m"><label for="m">M</label>
                    <input type="radio" id="l" name="size" value="l"><label for="l">L</label>
                    <!-- <ol>
                    <li><label><input type="radio" name="size" value="s"> <span>S</span></label></li>
                    <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
                    <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
                    </ol> -->
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

document.getElementById('product').innerHTML = loadProducts(product0)
document.getElementById('product').innerHTML += loadProducts(product1)
document.getElementById('product').innerHTML += loadProducts(product2)
document.getElementById('product').innerHTML += loadProducts(product3)
document.getElementById('product').innerHTML += loadProducts(product4)
