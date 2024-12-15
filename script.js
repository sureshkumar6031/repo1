// A simple cart system
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    // Adding the product to the cart array
    cart.push({ name: productName, price: price });

    // Displaying the success message
    alert(`${productName} has been added to your cart!`);
}

// Optionally, you could display the cart contents on a separate page or section
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let cartDetails = "Your Cart:\n";
        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
        });
        alert(cartDetails);
    }
}
