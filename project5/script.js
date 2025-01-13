let cart = [];

// Function to move the carousel left or right
function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.product-card');
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = cards[0].offsetWidth + 20; // Include margin

    const maxVisibleCards = Math.floor(containerWidth / cardWidth);
    const totalCards = cards.length;

    const maxIndex = Math.max(0, totalCards - maxVisibleCards);
    currentSlideIndex += direction;

    if (currentSlideIndex < 0) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex > maxIndex) {
        currentSlideIndex = maxIndex;
    }

    const offset = -currentSlideIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Function to add a project to the cart
function addToCart(projectName, price) {
    cart.push({ projectName, price });
    updateCart();
    alert(`${projectName} has been added to your cart!`);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    alert('Item removed from the cart.');
}

// Function to update the cart UI dynamically
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `
            <p>${item.projectName} - ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price;
    });

    cartTotalContainer.textContent = `Total: ₹${total}`;
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase! The project files will be sent to your email.');
    cart = [];
    updateCart();
}

// Function to display a thank-you message after checkout
function placeOrder() {
    alert('Order placed successfully! Files will be sent to your registered email.');
    cart = [];
    updateCart();
}

// Function to add/remove the "scrolled" class on the navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

