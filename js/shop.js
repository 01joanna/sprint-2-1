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
                type: getProduct.type,
                offer: getProduct.offer,
                quantity: 1
            });
        }
        calculateTotal()
        applyPromotionsCart()
        printCart()
        console.log(cart)
    }
}


// Exercise 2
function cleanCart() {
    cart = []
    window.alert("The cart was cleared succesfully")
    console.log(cart)
}

// Exercise 3
function calculateTotal() {
    total = 0;  
    cart.forEach(element => {
        total += element.price * element.quantity;
    })

    return total;
}
// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // Si l'usuari/ària compra 3 o més ampolles d'oli, el preu del producte es rebaixa un 20%.
    // Quan es compren 10 o més productes per a fer pastissos, el preu del producte es rebaixa un 30%.

    cart.forEach(element => {
        if (element && element.offer) {
            if ( element.offer.number && element.quantity >= element.offer.number) {
                const descuento = element.offer.percent / 100
                element.subtotalWithDiscount = element.price * element.quantity * (1 - descuento)
            }
        }})
}

// Exercise 5
function printCart() {
    const cartList = document.getElementById('cart_list');
    const totalID = document.getElementById('total_price');
    let total = 0;
    cartList.innerHTML = ''

    cart.forEach(element => {
        let subtotal = element.subtotalWithDiscount ? element.subtotalWithDiscount : element.quantity * element.price;

        total += subtotal;
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <th scope="row">${element.name}</th>
            <td>${element.price}</td>
            <td>${element.quantity}</td>
            <td>${subtotal}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${element.id})">Borrar</button></td>
        `;
        cartList.appendChild(tr)
    })

    totalID.innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    const index = cart.findIndex(product => product.id === id)

    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--
        } else {
            cart.splice(index, 1)
        }

    }

    calculateTotal()
    applyPromotionsCart()
    printCart()

}

function open_modal() {
    printCart();
}