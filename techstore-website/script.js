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

// Laptop data with images
const laptops = {
    study: [
        {
            name: 'EcoBook Essential',
            specs: 'Intel Core i3 • 8GB RAM • 256GB SSD • 14" Display',
            price: '$450',
            description: 'Perfect for students and basic office work',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'SlimPro Office',
            specs: 'Intel Core i5 • 8GB RAM • 512GB SSD • 15.6" Display',
            price: '$650',
            description: 'Great for multitasking and productivity',
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'UltraLight Study',
            specs: 'AMD Ryzen 5 • 16GB RAM • 512GB SSD • 13.3" Display',
            price: '$750',
            description: 'Lightweight and powerful for advanced users',
            image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop&crop=center'
        }
    ],
    coding: [
        {
            name: 'DevPro Master',
            specs: 'Intel Core i7 • 16GB RAM • 1TB SSD • 15.6" Display',
            price: '$1200',
            description: 'Ideal for software development and coding',
            image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'CodeRunner Elite',
            specs: 'AMD Ryzen 7 • 32GB RAM • 1TB SSD • 16" Display',
            price: '$1500',
            description: 'Perfect for large projects and databases',
            image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'FullStack Pro',
            specs: 'Intel Core i9 • 32GB RAM • 2TB SSD • 17" Display',
            price: '$2200',
            description: 'Professional development powerhouse',
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&crop=center'
        }
    ],
    design: [
        {
            name: 'Creative Studio',
            specs: 'Intel Core i7 • 32GB RAM • RTX 4060 • 1TB SSD • 15.6" 4K Display',
            price: '$2000',
            description: 'Perfect for graphic design and video editing',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: '3D Master Pro',
            specs: 'Intel Core i9 • 64GB RAM • RTX 4070 • 2TB SSD • 17" 4K Display',
            price: '$3500',
            description: 'Professional 3D modeling and rendering',
            image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'Animation Beast',
            specs: 'Intel Core i9 • 128GB RAM • RTX 4080 • 4TB SSD • 18" 4K Display',
            price: '$5000',
            description: 'Ultimate machine for animation and VFX',
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop&crop=center'
        }
    ],
    gaming: [
        {
            name: 'GameForce Entry',
            specs: 'Intel Core i5 • 16GB RAM • RTX 4050 • 512GB SSD • 15.6" 144Hz',
            price: '$1100',
            description: 'Great for casual and competitive gaming',
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'PowerGame Elite',
            specs: 'Intel Core i7 • 32GB RAM • RTX 4070 • 1TB SSD • 17" 165Hz',
            price: '$2200',
            description: 'High-performance gaming and streaming',
            image: 'https://images.unsplash.com/photo-1585394874875-31e02bc8e9c3?w=400&h=300&fit=crop&crop=center'
        },
        {
            name: 'Gaming Monster',
            specs: 'Intel Core i9 • 64GB RAM • RTX 4090 • 2TB SSD • 18" 240Hz',
            price: '$4500',
            description: 'Ultimate gaming experience at max settings',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop&crop=center'
        }
    ]
};

let currentLanguage = 'en';
let currentCategory = null;

// DOM Elements
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close');
const orderForm = document.getElementById('orderForm');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeEventListeners();
    showAllCategories();
    loadLaptopsFromAdmin();
});

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

function displayProducts(category) {
    const productGrid = document.getElementById(`${category}-products`);
    if (!productGrid || !laptops[category]) return;
    
    productGrid.innerHTML = '';
    
    laptops[category].forEach(laptop => {
        const productCard = createProductCard(laptop);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(laptop) {
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
        <button class="order-btn" data-product="${laptop.name}">
            ${translations[currentLanguage]['order-now']}
        </button>
    `;
    
    // Add order button event listener
    const orderBtn = card.querySelector('.order-btn');
    orderBtn.addEventListener('click', function() {
        openOrderModal(laptop.name);
    });
    
    return card;
}

// Modal functionality
function openOrderModal(productName) {
    document.getElementById('productName').value = productName;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    orderForm.reset();
}

// Order form handling
function handleOrderSubmission(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        product: document.getElementById('productName').value,
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value,
        notes: document.getElementById('orderNotes').value,
        date: new Date().toLocaleDateString()
    };
    
    // Save order for admin dashboard
    const existingOrders = JSON.parse(localStorage.getItem('customerOrders') || '[]');
    existingOrders.push(formData);
    localStorage.setItem('customerOrders', JSON.stringify(existingOrders));
    
    // Show success message
    alert('Order submitted successfully! We will contact you soon.');
    
    closeModal();
}

// Load laptops from admin dashboard
function loadLaptopsFromAdmin() {
    const adminLaptops = JSON.parse(localStorage.getItem('laptopsData') || 'null');
    if (adminLaptops) {
        // Merge with existing laptops
        Object.keys(adminLaptops).forEach(category => {
            if (laptops[category] && adminLaptops[category].length > 0) {
                laptops[category] = [...laptops[category], ...adminLaptops[category]];
            }
        });
    }
}

// Utility function to handle image loading errors
function handleImageError(img) {
    img.style.display = 'none';
    img.parentElement.style.background = 'linear-gradient(45deg, #f0f2f5, #e1e8ed)';
    img.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 2rem;">💻</div>';
}