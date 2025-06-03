// Translation data
const translations = {
    en: {
        'logo': 'TechStore',
        'hero-title': 'Find Your Perfect Laptop',
        'hero-subtitle': 'Choose by purpose, not by complicated specs',
        'categories-title': 'What will you use your laptop for?',
        'study-title': 'Study & Office Work',
        'study-desc': 'Perfect for documents, research, and online classes',
        'coding-title': 'Programming & Development',
        'coding-desc': 'Powerful enough for coding and software development',
        'design-title': 'Design & 3D Work',
        'design-desc': 'High-performance for graphics and 3D modeling',
        'gaming-title': 'Gaming',
        'gaming-desc': 'Built for the latest games and entertainment',
        'study-laptops-title': 'Study & Office Laptops',
        'coding-laptops-title': 'Programming Laptops',
        'design-laptops-title': 'Design & 3D Laptops',
        'gaming-laptops-title': 'Gaming Laptops',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Ready to order? Get in touch with us!',
        'order-title': 'Order Laptop',
        'product-label': 'Product:',
        'name-label': 'Full Name:',
        'email-label': 'Email:',
        'phone-label': 'Phone Number:',
        'address-label': 'Delivery Address:',
        'notes-label': 'Additional Notes:',
        'submit-order': 'Submit Order',
        'order-now': 'Order Now'
    },
    ar: {
        'logo': 'متجر التقنية',
        'hero-title': 'اعثر على الكمبيوتر المحمول المثالي',
        'hero-subtitle': 'اختر حسب الغرض، وليس بالمواصفات المعقدة',
        'categories-title': 'ما الذي ستستخدم الكمبيوتر المحمول من أجله؟',
        'study-title': 'الدراسة والعمل المكتبي',
        'study-desc': 'مثالي للمستندات والبحث والفصول الدراسية عبر الإنترنت',
        'coding-title': 'البرمجة والتطوير',
        'coding-desc': 'قوي بما يكفي للبرمجة وتطوير البرمجيات',
        'design-title': 'التصميم والعمل ثلاثي الأبعاد',
        'design-desc': 'أداء عالي للرسومات والنمذجة ثلاثية الأبعاد',
        'gaming-title': 'الألعاب',
        'gaming-desc': 'مصمم لأحدث الألعاب والترفيه',
        'study-laptops-title': 'أجهزة الكمبيوتر المحمولة للدراسة والمكتب',
        'coding-laptops-title': 'أجهزة الكمبيوتر المحمولة للبرمجة',
        'design-laptops-title': 'أجهزة الكمبيوتر المحمولة للتصميم وثلاثي الأبعاد',
        'gaming-laptops-title': 'أجهزة الكمبيوتر المحمولة للألعاب',
        'contact-title': 'اتصل بنا',
        'contact-subtitle': 'مستعد للطلب؟ تواصل معنا!',
        'order-title': 'طلب الكمبيوتر المحمول',
        'product-label': 'المنتج:',
        'name-label': 'الاسم الكامل:',
        'email-label': 'البريد الإلكتروني:',
        'phone-label': 'رقم الهاتف:',
        'address-label': 'عنوان التسليم:',
        'notes-label': 'ملاحظات إضافية:',
        'submit-order': 'إرسال الطلب',
        'order-now': 'اطلب الآن'
    },
    fr: {
        'logo': 'TechStore',
        'hero-title': 'Trouvez Votre Ordinateur Portable Parfait',
        'hero-subtitle': 'Choisissez par usage, pas par spécifications compliquées',
        'categories-title': 'À quoi utiliserez-vous votre ordinateur portable?',
        'study-title': 'Études et Travail de Bureau',
        'study-desc': 'Parfait pour les documents, la recherche et les cours en ligne',
        'coding-title': 'Programmation et Développement',
        'coding-desc': 'Assez puissant pour le codage et le développement logiciel',
        'design-title': 'Design et Travail 3D',
        'design-desc': 'Haute performance pour les graphiques et la modélisation 3D',
        'gaming-title': 'Gaming',
        'gaming-desc': 'Conçu pour les derniers jeux et le divertissement',
        'study-laptops-title': 'Ordinateurs Portables pour Études et Bureau',
        'coding-laptops-title': 'Ordinateurs Portables pour Programmation',
        'design-laptops-title': 'Ordinateurs Portables pour Design et 3D',
        'gaming-laptops-title': 'Ordinateurs Portables Gaming',
        'contact-title': 'Contactez-Nous',
        'contact-subtitle': 'Prêt à commander? Contactez-nous!',
        'order-title': 'Commander un Ordinateur Portable',
        'product-label': 'Produit:',
        'name-label': 'Nom Complet:',
        'email-label': 'Email:',
        'phone-label': 'Numéro de Téléphone:',
        'address-label': 'Adresse de Livraison:',
        'notes-label': 'Notes Supplémentaires:',
        'submit-order': 'Soumettre la Commande',
        'order-now': 'Commander Maintenant'
    }
};

// Database Configuration - Replace with your actual JSONBin.io credentials
const API_CONFIG = {
    JSONBIN_API_KEY: '$2a$10$your-api-key-here', // Replace with your JSONBin.io API key
    LAPTOPS_BIN_ID: '64f8a9b8b89b1e2847d12345', // Replace with your laptops bin ID
    ORDERS_BIN_ID: '64f8a9b8b89b1e2847d67890'   // Replace with your orders bin ID
};

let currentLanguage = 'en';
let currentCategory = null;
let laptops = {
    study: [],
    coding: [],
    design: [],
    gaming: []
};

// DOM Elements
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close');
const orderForm = document.getElementById('orderForm');
const orderStatus = document.getElementById('order-status');
const submitBtn = document.getElementById('submitOrderBtn');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeEventListeners();
    showAllCategories();
    loadLaptopsFromAPI();
});

// Database API Functions
async function apiRequest(url, method = 'GET', data = null) {
    const config = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_CONFIG.JSONBIN_API_KEY
        }
    };
    
    if (data) {
        config.body = JSON.stringify(data);
    }
    
    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

async function loadLaptopsFromAPI() {
    try {
        showLoadingMessage();
        const response = await apiRequest(`https://api.jsonbin.io/v3/b/${API_CONFIG.LAPTOPS_BIN_ID}/latest`);
        
        if (response && response.record) {
            laptops = response.record;
            displayAllCategories();
        } else {
            console.log('No laptops data found, using demo data');
            loadDemoLaptops();
        }
    } catch (error) {
        console.error('Failed to load laptops from API:', error);
        loadDemoLaptops(); // Fallback to demo data
    }
}

async function saveOrderToAPI(orderData) {
    try {
        // First, get existing orders
        let existingOrders = [];
        try {
            const response = await apiRequest(`https://api.jsonbin.io/v3/b/${API_CONFIG.ORDERS_BIN_ID}/latest`);
            if (response && response.record && Array.isArray(response.record)) {
                existingOrders = response.record;
            }
        } catch (error) {
            console.log('No existing orders found, creating new orders array');
        }
        
        // Add new order with unique ID and timestamp
        const newOrder = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...orderData
        };
        
        existingOrders.push(newOrder);
        
        // Save updated orders array
        await apiRequest(
            `https://api.jsonbin.io/v3/b/${API_CONFIG.ORDERS_BIN_ID}`,
            'PUT',
            existingOrders
        );
        
        return true;
    } catch (error) {
        console.error('Failed to save order to API:', error);
        throw error;
    }
}

function loadDemoLaptops() {
    // Demo data for testing
    laptops = {
        study: [
            {
                name: "HP Pavilion 15",
                specs: "Intel Core i5 • 8GB RAM • 256GB SSD • 15.6\" HD Display",
                price: "$599",
                description: "Perfect for students and office work with reliable performance.",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
            },
            {
                name: "Lenovo IdeaPad 3",
                specs: "AMD Ryzen 5 • 8GB RAM • 512GB SSD • 14\" FHD Display",
                price: "$549",
                description: "Lightweight and efficient for daily computing tasks.",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400"
            }
        ],
        coding: [
            {
                name: "Dell XPS 13",
                specs: "Intel Core i7 • 16GB RAM • 512GB SSD • 13.3\" 4K Display",
                price: "$1299",
                description: "Premium ultrabook perfect for developers and programmers.",
                image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400"
            }
        ],
        design: [
            {
                name: "MacBook Pro 16\"",
                specs: "Apple M2 Pro • 32GB RAM • 1TB SSD • 16\" Retina Display",
                price: "$2499",
                description: "Professional-grade laptop for graphic design and video editing.",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
            }
        ],
        gaming: [
            {
                name: "ASUS ROG Strix",
                specs: "Intel Core i7 • 16GB RAM • RTX 4060 • 1TB SSD • 15.6\" 144Hz Display",
                price: "$1599",
                description: "High-performance gaming laptop for the latest AAA games.",
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
            }
        ]
    };
    displayAllCategories();
}

function showLoadingMessage() {
    document.querySelectorAll('.product-grid').forEach(grid => {
        grid.innerHTML = '<div class="no-products">Loading laptops...</div>';
    });
}

// Language functionality
function initializeLanguage() {
    updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update all text elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update RTL for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
    
    // Refresh current category display
    if (currentCategory) {
        showCategory(currentCategory);
    }
}

// Event listeners
function initializeEventListeners() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showCategory(category);
            
            // Update active state
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Modal functionality
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Order form submission
    orderForm.addEventListener('submit', handleOrderSubmission);
}

// Category and product display
function showAllCategories() {
    // Hide all product sections initially
    document.querySelectorAll('.products').forEach(section => {
        section.classList.remove('active');
    });
}

function showCategory(category) {
    currentCategory = category;
    
    // Hide all product sections
    document.querySelectorAll('.products').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected category
    const categorySection = document.getElementById(`products-${category}`);
    if (categorySection) {
        categorySection.classList.add('active');
        displayProducts(category);
        
        // Scroll to products section
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }
}

function displayAllCategories() {
    // Display products for all categories
    Object.keys(laptops).forEach(category => {
        displayProducts(category);
    });
}

function displayProducts(category) {
    const productGrid = document.getElementById(`${category}-products`);
    if (!productGrid) return;
    
    const categoryLaptops = laptops[category] || [];
    
    if (categoryLaptops.length === 0) {
        productGrid.innerHTML = '<div class="no-products">No products available in this category yet.</div>';
        return;
    }
    
    productGrid.innerHTML = '';
    
    categoryLaptops.forEach((laptop, index) => {
        const productCard = createProductCard(laptop, category, index);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(laptop, category, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${laptop.image}" alt="${laptop.name}" onerror="this.style.display='none'">
        </div>
        <div class="product-name">${laptop.name}</div>
        <div class="product-specs">${laptop.specs}</div>
        <div class="product-description">${laptop.description}</div>
        <div class="product-price">${laptop.price}</div>
        <button class="order-btn" onclick="openOrderModal('${laptop.name}', '${laptop.price}')">
            <span data-key="order-now">${translations[currentLanguage]['order-now']}</span>
        </button>
    `;
    
    return card;
}

// Modal functionality
function openOrderModal(productName, productPrice) {
    document.getElementById('productName').value = `${productName} - ${productPrice}`;
    modal.style.display = 'block';
    resetOrderStatus();
}

function closeModal() {
    modal.style.display = 'none';
    orderForm.reset();
    resetOrderStatus();
}

function resetOrderStatus() {
    orderStatus.className = 'order-status';
    orderStatus.style.display = 'none';
    orderStatus.textContent = '';
    submitBtn.disabled = false;
    submitBtn.textContent = translations[currentLanguage]['submit-order'];
}

function showOrderStatus(type, message) {
    orderStatus.className = `order-status ${type}`;
    orderStatus.style.display = 'block';
    orderStatus.textContent = message;
}

// Order handling
async function handleOrderSubmission(event) {
    event.preventDefault();
    
    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    showOrderStatus('loading', 'Submitting your order...');
    
    // Collect form data
    const orderData = {
        product: document.getElementById('productName').value,
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value,
        notes: document.getElementById('orderNotes').value,
        date: new Date().toLocaleDateString(),
        status: 'pending'
    };
    
    try {
        // Save order to database
        await saveOrderToAPI(orderData);
        
        // Show success message
        showOrderStatus('success', 'Order submitted successfully! We will contact you soon.');
        
        // Reset form after delay
        setTimeout(() => {
            closeModal();
        }, 3000);
    } catch (error) {
        console.error('Order submission failed:', error);
        showOrderStatus('error', 'Failed to submit order. Please try again or contact us directly.');
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLanguage]['submit-order'];
    }
}

// Utility functions for admin integration
function getLaptopsData() {
    return laptops;
}

function updateLaptopsData(newLaptops) {
    laptops = newLaptops;
    displayAllCategories();
}

// Auto-refresh laptops data every 30 seconds
setInterval(async () => {
    try {
        await loadLaptopsFromAPI();
    } catch (error) {
        console.log('Auto-refresh failed:', error);
    }
}, 30000);
