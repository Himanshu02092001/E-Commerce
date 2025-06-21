// Selects the menu icon element with the class '.bx-menu'
let menu = document.querySelector('.bx-menu');

// Selects the navbar element with the class '.navbar'
let navbar = document.querySelector('.navbar');

// Adds a click event listener to the menu icon
menu.addEventListener('click', function () {
    // Toggles the 'bx-x' class on the menu icon (used to change icon appearance)
    menu.classList.toggle('bx-x');
    // Toggles the 'nav-toggle' class on the navbar (used to show/hide navbar on smaller screens)
    navbar.classList.toggle('nav-toggle');
});

// Adds a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Removes the 'bx-x' class from the menu icon when scrolling
    menu.classList.remove('bx-x');
    // Removes the 'nav-toggle' class from the navbar when scrolling (closes the navbar on scroll)
    navbar.classList.remove('nav-toggle');
});

// Selects the header element
const header = document.querySelector('header');

// Adds an event listener to the window for the scroll event
window.onscroll = function () {
    // Checks if the page is scrolled down more than 5 pixels
    if (document.documentElement.scrollTop > 5) {
        // Sets header height to 70px on scroll
        header.style.height = '70px';
        // Changes header background color to white when scrolling
        header.style.backgroundColor = '#fff';
    } else {
        // Sets header height back to 100px when at the top of the page
        header.style.height = '100px';
        // Keeps header background color as white at the top of the page
        header.style.backgroundColor = '#fff';
    }
};

// Selects all elements with the class '.contentBox' (for an accordion component)
const accordion = document.querySelectorAll('.contentBox');

// Loops through each element in the accordion NodeList
for (let i = 0; i < accordion.length; i++) {
    // Adds a click event listener to each accordion item
    accordion[i].addEventListener('click', function () {
        // Toggles the 'active' class on the clicked accordion item
        // This is likely used to open/close accordion content
        this.classList.toggle('active');
    });
}
// script.js
document.getElementById('orderForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const flavor = document.getElementById('flavors').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    const orderData = { flavor, quantity, address };

    try {
        const response = await fetch('/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        document.getElementById('response').innerText = result.message;
    } catch (error) {
        document.getElementById('response').innerText = 'Error placing order.';
    }
});

// Payment button integration
document.getElementById('payNow').addEventListener('click', () => {
    alert('Redirecting to payment gateway...');
});
// Function to open the modal with the clicked image
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    // Set the modal image source to the clicked image
    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt; // Show the alt text as the caption
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
