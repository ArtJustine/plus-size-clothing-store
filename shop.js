document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const productGrid = document.querySelector('.product-grid');
    const categoryFilters = document.querySelectorAll('input[type="checkbox"][name="category"]');
    const subcategoryFilters = document.querySelectorAll('input[type="checkbox"][name="subcategory"]');
    const sizeFilters = document.querySelectorAll('input[type="checkbox"][name="size"]');
    const colorFilters = document.querySelectorAll('input[type="checkbox"][name="color"]');
    const priceSlider = document.querySelector('.price-slider');
    const priceRange = document.querySelector('.price-range');
    const sortSelect = document.querySelector('.sort-select');

    // Product data (in a real application, this would come from a backend API)
    const products = [
        // Tops
        {
            id: 1,
            name: 'Elegant Blouse',
            price: 49.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'tops',
            subcategory: 'blouses',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Comfortable and stylish blouse that goes with everything.',
            inStock: true,
            colors: ['white', 'pink']
        },
        {
            id: 2,
            name: 'Casual T-Shirt',
            price: 29.99,
            sizes: ['14', '16', '18', '20', '22', '24'],
            category: 'tops',
            subcategory: 'tshirts',
            image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Comfortable cotton t-shirt with a modern fit.',
            inStock: true,
            colors: ['white', 'black', 'blue']
        },
        {
            id: 3,
            name: 'Floral Tunic',
            price: 59.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'tops',
            subcategory: 'tunics',
            image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Flowy tunic with beautiful floral print.',
            inStock: true,
            colors: ['pink', 'blue']
        },
        {
            id: 4,
            name: 'Crop Top',
            price: 39.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'tops',
            subcategory: 'crop-tops',
            image: 'https://images.unsplash.com/photo-1581044777550-4fa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Stylish crop top for a modern look.',
            inStock: true,
            colors: ['white', 'black']
        },
        {
            id: 5,
            name: 'Cashmere Sweater',
            price: 89.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'tops',
            subcategory: 'sweaters',
            image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Luxurious cashmere sweater for comfort.',
            inStock: true,
            colors: ['gray', 'navy']
        },
        // Bottoms
        {
            id: 6,
            name: 'High Waist Jeans',
            price: 69.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'bottoms',
            subcategory: 'jeans',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'High waist jeans that provide comfort and style.',
            inStock: true,
            colors: ['blue', 'black']
        },
        {
            id: 7,
            name: 'Bootcut Jeans',
            price: 69.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'bottoms',
            subcategory: 'jeans',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Classic bootcut jeans for a timeless look.',
            inStock: true,
            colors: ['blue', 'black']
        },
        {
            id: 8,
            name: 'Skinny Jeans',
            price: 64.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'bottoms',
            subcategory: 'jeans',
            image: 'https://images.unsplash.com/photo-1506629905607-d9c36ad15364?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Comfortable skinny jeans with stretch.',
            inStock: true,
            colors: ['blue', 'black', 'white']
        },
        {
            id: 9,
            name: 'Wide Leg Pants',
            price: 79.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'bottoms',
            subcategory: 'pants',
            image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Elegant wide leg pants for a sophisticated look.',
            inStock: true,
            colors: ['navy', 'black', 'gray']
        },
        {
            id: 10,
            name: 'Leggings',
            price: 39.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'bottoms',
            subcategory: 'leggings',
            image: 'https://images.unsplash.com/photo-1506629905607-d9c36ad15364?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Comfortable and stylish leggings.',
            inStock: true,
            colors: ['black', 'gray', 'navy']
        },
        // Add some dress samples
        {
            id: 11,
            name: 'Summer Dress',
            price: 89.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'dresses',
            subcategory: 'casual-dresses',
            image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Light and breezy summer dress.',
            inStock: true,
            colors: ['blue', 'pink']
        },
        {
            id: 12,
            name: 'Evening Gown',
            price: 149.99,
            sizes: ['14', '16', '18', '20', '22'],
            category: 'dresses',
            subcategory: 'evening-dresses',
            image: 'https://images.unsplash.com/photo-1566479179817-3a9d7e9b1e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Elegant evening gown for special occasions.',
            inStock: true,
            colors: ['black', 'navy']
        }
    ];

    // Category to subcategory mapping
    const categorySubcategoryMap = {
        'tops': ['blouses', 'tshirts', 'tunics', 'crop-tops', 'sweaters'],
        'bottoms': ['jeans', 'leggings', 'skirts', 'pants', 'shorts'],
        'dresses': ['casual-dresses', 'evening-dresses', 'work-dresses', 'maxi-dresses', 'bodycon-dresses'],
        'outerwear': ['jackets', 'coats', 'vests', 'denim-jackets', 'raincoats'],
        'activewear': ['sports-bras', 'workout-leggings', 'hoodies', 'tracksuits', 'yoga-pants'],
        'loungewear': ['pajamas', 'robes', 'lounge-sets', 'nightgowns'],
        'undergarments': ['bras', 'shapewear', 'panties', 'lingerie'],
        'swimwear': ['one-piece', 'bikinis', 'tankinis', 'swim-dresses', 'cover-ups']
    };

    // Function to update subcategory visibility based on selected categories
    function updateSubcategoryVisibility() {
        const selectedCategories = Array.from(categoryFilters)
            .filter(filter => filter.checked)
            .map(filter => filter.value);

        // Hide all subcategory options first
        subcategoryFilters.forEach(filter => {
            filter.parentElement.style.display = 'none';
            filter.checked = false; // Uncheck hidden subcategories
        });

        // Show only relevant subcategories for selected categories
        if (selectedCategories.length > 0) {
            const relevantSubcategories = [];
            selectedCategories.forEach(category => {
                if (categorySubcategoryMap[category]) {
                    relevantSubcategories.push(...categorySubcategoryMap[category]);
                }
            });

            subcategoryFilters.forEach(filter => {
                if (relevantSubcategories.includes(filter.value)) {
                    filter.parentElement.style.display = 'block';
                }
            });
        }
    }

    // Display products in the grid
    function displayProducts(products) {
        if (!productGrid) {
            console.error('Product grid element not found');
            return;
        }

        productGrid.innerHTML = '';
        if (products.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }

        // Sort products by category first
        const categoryOrder = ['tops', 'bottoms', 'dresses', 'outerwear', 'activewear', 'loungewear', 'undergarments', 'swimwear'];
        products.sort((a, b) => {
            const categoryComparison = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
            if (categoryComparison !== 0) return categoryComparison;
            return a.id - b.id; // Secondary sort by ID
        });

        // Group products by category
        const categoryGroups = {};
        products.forEach(product => {
            if (!categoryGroups[product.category]) {
                categoryGroups[product.category] = [];
            }
            categoryGroups[product.category].push(product);
        });

        // Create category headers and product cards
        Object.entries(categoryGroups).forEach(([category, categoryProducts]) => {
            const categoryHeader = document.createElement('h2');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            productGrid.appendChild(categoryHeader);

            categoryProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-overlay">
                            <button class="quick-view">Quick View</button>
                            <button class="add-to-wishlist">Add to Wishlist</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-sizes">
                            ${product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('')}
                        </div>
                        <div class="product-colors">
                            ${product.colors.map(color => `
                                <span class="color-tag" style="background-color: ${color === 'white' ? '#fff' : color}; border: ${color === 'white' ? '1px solid #ddd' : 'none'};"></span>
                            `).join('')}
                        </div>
                        <p class="price">$${product.price.toFixed(2)}</p>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        });
    }

    // Filter products based on selected criteria
    function filterProducts() {
        let filteredProducts = [...products];

        // Filter by category
        const selectedCategories = Array.from(categoryFilters).filter(filter => filter.checked).map(filter => filter.value);
        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
        }

        // Filter by subcategory
        const selectedSubcategories = Array.from(subcategoryFilters).filter(filter => filter.checked).map(filter => filter.value);
        if (selectedSubcategories.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedSubcategories.includes(product.subcategory));
        }

        // Filter by size
        const selectedSizes = Array.from(sizeFilters).filter(filter => filter.checked).map(filter => filter.value);
        if (selectedSizes.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedSizes.some(size => product.sizes.includes(size)));
        }

        // Filter by color
        const selectedColors = Array.from(colorFilters).filter(filter => filter.checked).map(filter => filter.value);
        if (selectedColors.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedColors.some(color => product.colors.includes(color)));
        }

        // Filter by price range
        const maxPrice = parseInt(priceSlider.value);
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

        // Sort products
        if (sortSelect) {
            switch(sortSelect.value) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'popularity':
                    filteredProducts.sort((a, b) => b.id - a.id);
                    break;
                default: // latest
                    filteredProducts.sort((a, b) => b.id - a.id);
            }
        }

        displayProducts(filteredProducts);
    }

    // Function to add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return;

        // For this demo, we'll just show an alert
        // In a real application, you'd add to a cart system
        alert(`${product.name} has been added to your cart!`);
        
        // If you want to use localStorage (note: this won't work in Claude artifacts)
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // const existingItem = cart.find(item => item.id === product.id);
        // if (existingItem) {
        //     existingItem.quantity += 1;
        // } else {
        //     cart.push({
        //         id: product.id,
        //         name: product.name,
        //         price: product.price,
        //         image: product.image,
        //         quantity: 1
        //     });
        // }
        // localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Initialize price slider
    if (priceSlider && priceRange) {
        priceSlider.addEventListener('input', () => {
            const value = priceSlider.value;
            priceRange.textContent = `$0 - $${value}`;
            filterProducts();
        });
        
        // Set initial price range display
        priceRange.textContent = `$0 - $${priceSlider.value}`;
    }

    // Handle category filter changes
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            updateSubcategoryVisibility();
            filterProducts();
        });
    });

    // Handle subcategory filter changes
    subcategoryFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    // Handle size filter changes
    sizeFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    // Handle color filter changes
    colorFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    // Handle sort changes
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }

    // Handle add to cart clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
    });

    // Add CSS styles for the product cards
    const style = document.createElement('style');
    style.textContent = `
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            padding: 1rem 0;
        }

        .category-header {
            grid-column: 1 / -1;
            color: #333;
            font-size: 1.5rem;
            margin: 2rem 0 1rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #ff69b4;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .product-image {
            position: relative;
            height: 300px;
            overflow: hidden;
        }

        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .product-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
            background: rgba(255,255,255,0.9);
            display: none;
        }

        .product-card:hover .product-overlay {
            display: block;
        }

        .product-overlay button {
            background: #ff69b4;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin: 0 0.5rem;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .product-overlay button:hover {
            background: #ff1493;
        }

        .product-info {
            padding: 1.5rem;
        }

        .product-info h3 {
            margin-bottom: 0.5rem;
            color: #333;
        }

        .product-sizes {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            flex-wrap: wrap;
        }

        .size-tag {
            background: #f8f9fa;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
            font-size: 0.8rem;
            color: #666;
        }

        .product-colors {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .color-tag {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #ddd;
        }

        .price {
            font-size: 1.2rem;
            font-weight: bold;
            color: #ff69b4;
            margin-bottom: 1rem;
        }

        .add-to-cart {
            width: 100%;
            padding: 1rem;
            background: #ff69b4;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease;
        }

        .add-to-cart:hover {
            background: #ff1493;
        }

        .no-products {
            grid-column: 1 / -1;
            text-align: center;
            padding: 2rem;
            color: #666;
            font-size: 1.1rem;
        }

        @media (max-width: 768px) {
            .product-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize the page
    updateSubcategoryVisibility(); // Hide all subcategories initially
    displayProducts(products); // Show all products on load
});