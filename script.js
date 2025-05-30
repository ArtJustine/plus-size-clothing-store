// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Added ${productName} to cart!`);
    });
});

// Search Functionality
const searchIcon = document.querySelector('.fa-search');
const searchOverlay = document.createElement('div');
searchOverlay.className = 'search-overlay';
searchOverlay.innerHTML = `
    <div class="search-container">
        <input type="text" placeholder="Search products...">
        <button class="close-search">&times;</button>
    </div>
`;

document.body.appendChild(searchOverlay);

searchIcon.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
});

document.querySelector('.close-search').addEventListener('click', () => {
    searchOverlay.style.display = 'none';
});

// Close search overlay when clicking outside
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
});

// Add styles for search overlay
const style = document.createElement('style');
style.textContent = `
    .search-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        justify-content: center;
        align-items: center;
        z-index: 1001;
    }

    .search-container {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
    }

    .search-container input {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 1rem;
    }

    .close-search {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
