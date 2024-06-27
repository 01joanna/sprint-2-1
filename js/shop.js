// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

const products = []

fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        products.push(...data);
        console.log(products);
    })
    .catch(err => console.error(err));

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    const getProduct = products.find(product => product.id === id)
    console.log(getProduct)

    //si el elemento esta seleccionado en getProduct y ya esta en el cart
    if (getProduct) {
        const productInCart = cart.find(item => item.id === id)
        if (productInCart) {
            productInCart.quantity++
        } else {
            // 2. Add found product to the cart array
            //si el elemento no existe en el cart
            cart.push({
                id: getProduct.id,
                name: getProduct.name,
                price: getProduct.price,
                quantity: 1
            })
        }
        console.log(cart)
    }
}


// Exercise 2
function cleanCart() {

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}