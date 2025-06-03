// Global variables
let currentLanguage = 'en';
let products = [];
let cart = [];
let orders = [];
let currentFilter = 'all';

// Language translations
const translations = {
    en: {
        'store-name': 'TechLaptops',
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-admin': 'Admin',
        'hero-title': 'Find Your Perfect Laptop',
        'hero-subtitle': 'Professional laptops for every need - Gaming, Coding, Business, Creative Work & Education',
        'hero-cta': 'Shop Now',
        'categories-title': 'Shop by Category',
        'category-gaming': 'Gaming Laptops',
        'category-gaming-desc': 'High-performance laptops for gaming',
        'category-coding': 'Coding/Development',
        'category-coding-desc': 'Perfect for developers and programmers',
        'category-business': 'Business',
        'category-business-desc': 'Professional laptops for business',
        'category-creative': 'Creative Work',
        'category-creative-desc': 'For designers and content creators',
        'category-education': 'Education',
        'category-education-desc': 'Affordable laptops for students',
        'products-title': 'Our Laptops',
        'filter-all': 'All',
        'filter-gaming': 'Gaming',
        'filter-coding': 'Coding',
        'filter-business': 'Business',
        'filter-creative': 'Creative',
        'filter-education': 'Education',
        'about-title': 'About TechLaptops',
        'about-description': 'We are a leading provider of high-quality laptops for professionals, gamers, students, and everyone in between. Our carefully curated selection ensures you find the perfect laptop for your specific needs.',
        'contact-title': 'Contact Us',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-address-title': 'Address',
        'cart-title': 'Shopping Cart',
        'cart-total': 'Total',
        'cart-checkout': 'Checkout',
        'order-title': 'Complete Your Order',
        'order-name': 'Full Name',
        'order-email': 'Email',
        'order-phone': 'Phone',
        'order-address': 'Address',
        'order-notes': 'Order Notes (Optional)',
        'order-submit': 'Place Order',
        'footer-copyright': '© 2025 TechLaptops. All rights reserved.',
        'add-to-cart': 'Add to Cart',
        'admin-dashboard': 'Admin Dashboard',
        'admin-products': 'Products',
        'admin-orders': 'Orders',
        'admin-add-product': 'Add Product',
        'product-name': 'Product Name',
        'product-category': 'Category',
        'product-price': 'Price',
        'product-brand': 'Brand',
        'product-image': 'Image URL',
        'product-description': 'Description',
        'processor': 'Processor',
        'ram': 'RAM',
        'storage': 'Storage',
        'graphics': 'Graphics Card',
        'save': 'Save',
        'cancel': 'Cancel',
        'edit': 'Edit',
        'delete': 'Delete',
        'pending': 'Pending',
        'processing': 'Processing',
        'shipped': 'Shipped',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    },
    fr: {
        'store-name': 'TechOrdinateurs',
        'nav-home': 'Accueil',
        'nav-products': 'Produits',
        'nav-about': 'À propos',
        'nav-contact': 'Contact',
        'nav-admin': 'Admin',
        'hero-title': 'Trouvez Votre Ordinateur Portable Parfait',
        'hero-subtitle': 'Ordinateurs portables professionnels pour tous les besoins - Gaming, Codage, Business, Travail Créatif et Éducation',
        'hero-cta': 'Acheter Maintenant',
        'categories-title': 'Acheter par Catégorie',
        'category-gaming': 'Ordinateurs Gaming',
        'category-gaming-desc': 'Ordinateurs haute performance pour le gaming',
        'category-coding': 'Codage/Développement',
        'category-coding-desc': 'Parfait pour les développeurs et programmeurs',
        'category-business': 'Business',
        'category-business-desc': 'Ordinateurs professionnels pour le business',
        'category-creative': 'Travail Créatif',
        'category-creative-desc': 'Pour les designers et créateurs de contenu',
        'category-education': 'Éducation',
        'category-education-desc': 'Ordinateurs abordables pour les étudiants',
        'products-title': 'Nos Ordinateurs Portables',
        'filter-all': 'Tous',
        'filter-gaming': 'Gaming',
        'filter-coding': 'Codage',
        'filter-business': 'Business',
        'filter-creative': 'Créatif',
        'filter-education': 'Éducation',
        'about-title': 'À propos de TechOrdinateurs',
        'about-description': 'Nous sommes un fournisseur leader d\'ordinateurs portables de haute qualité pour les professionnels, gamers, étudiants et tous les autres. Notre sélection soigneusement choisie vous assure de trouver l\'ordinateur portable parfait pour vos besoins spécifiques.',
        'contact-title': 'Contactez-nous',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Téléphone',
        'contact-address-title': 'Adresse',
        'cart-title': 'Panier d\'achat',
        'cart-total': 'Total',
        'cart-checkout': 'Commander',
        'order-title': 'Complétez Votre Commande',
        'order-name': 'Nom Complet',
        'order-email': 'Email',
        'order-phone': 'Téléphone',
        'order-address': 'Adresse',
        'order-notes': 'Notes de Commande (Optionnel)',
        'order-submit': 'Passer la Commande',
        'footer-copyright': '© 2025 TechOrdinateurs. Tous droits réservés.',
        'add-to-cart': 'Ajouter au Panier',
        'admin-dashboard': 'Tableau de Bord Admin',
        'admin-products': 'Produits',
        'admin-orders': 'Commandes',
        'admin-add-product': 'Ajouter Produit',
        'product-name': 'Nom du Produit',
        'product-category': 'Catégorie',
        'product-price': 'Prix',
        'product-brand': 'Marque',
        'product-image': 'URL de l\'Image',
        'product-description': 'Description',
        'processor': 'Processeur',
        'ram': 'RAM',
        'storage': 'Stockage',
        'graphics': 'Carte Graphique',
        'save': 'Sauvegarder',
        'cancel': 'Annuler',
        'edit': 'Modifier',
        'delete': 'Supprimer',
        'pending': 'En Attente',
        'processing': 'En Cours',
        'shipped': 'Expédié',
        'delivered': 'Livré',
        'cancelled': 'Annulé'
    },
    ar: {
        'store-name': 'تكنولاب',
        'nav-home': 'الرئيسية',
        'nav-products': 'المنتجات',
        'nav-about': 'حولنا',
        'nav-contact': 'اتصل بنا',
        'nav-admin': 'الإدارة',
        'hero-title': 'اعثر على الحاسوب المحمول المثالي',
        'hero-subtitle': 'حواسيب محمولة احترافية لكل الاحتياجات - الألعاب، البرمجة، الأعمال، العمل الإبداعي والتعليم',
        'hero-cta': 'تسوق الآن',
        'categories-title': 'تسوق حسب الفئة',
        'category-gaming': 'حواسيب الألعاب',
        'category-gaming-desc': 'حواسيب عالية الأداء للألعاب',
        'category-coding': 'البرمجة/التطوير',
        'category-coding-desc': 'مثالية للمطورين والمبرمجين',
        'category-business': 'الأعمال',
        'category-business-desc': 'حواسيب احترافية للأعمال',
        'category-creative': 'العمل الإبداعي',
        'category-creative-desc': 'للمصممين ومنشئي المحتوى',
        'category-education': 'التعليم',
        'category-education-desc': 'حواسيب بأسعار معقولة للطلاب',
        'products-title': 'حواسيبنا المحمولة',
        'filter-all': 'الكل',
        'filter-gaming': 'الألعاب',
        'filter-coding': 'البرمجة',
        'filter-business': 'الأعمال',
        'filter-creative': 'الإبداعي',
        'filter-education': 'التعليم',
        'about-title': 'حول تكنولاب',
        'about-description': 'نحن مزود رائد للحواسيب المحمولة عالية الجودة للمهنيين واللاعبين والطلاب وجميع الآخرين. اختيارنا المنتقى بعناية يضمن لك العثور على الحاسوب المحمول المثالي لاحتياجاتك المحددة.',
        'contact-title': 'اتصل بنا',
        'contact-email-title': 'البريد الإلكتروني',
        'contact-phone-title': 'الهاتف',
        'contact-address-title': 'العنوان',
        'cart-title': 'عربة التسوق',
        'cart-total': 'المجموع',
        'cart-checkout': 'الدفع',
        'order-title': 'أكمل طلبك',
        'order-name': 'الاسم الكامل',
        'order-email': 'البريد الإلكتروني',
        'order-phone': 'الهاتف',
        'order-address': 'العنوان',
        'order-notes': 'ملاحظات الطلب (اختياري)',
        'order-submit': 'تقديم الطلب',
        'footer-copyright': '© 2025 تكنولاب. جميع الحقوق محفوظة.',
        'add-to-cart': 'أضف للسلة',
        'admin-dashboard': 'لوحة التحكم',
        'admin-products': 'المنتجات',
        'admin-orders': 'الطلبات',
        'admin-add-product': 'إضافة منتج',
        'product-name': 'اسم المنتج',
        'product-category': 'الفئة',
        'product-price': 'السعر',
        'product-brand': 'الماركة',
        'product-image': 'رابط الصورة',
        'product-description': 'الوصف',
        'processor': 'المعالج',
        'ram': 'الذاكرة',
        'storage': 'التخزين',
        'graphics': 'كرت الرسوميات',
        'save': 'حفظ',
        'cancel': 'إلغاء',
        'edit': 'تعديل',
        'delete': 'حذف',
        'pending': 'قيد الانتظار',
        'processing': 'قيد المعالجة',
        'shipped': 'تم الشحن',
        'delivered': 'تم التسليم',
        'cancelled': 'ملغي'
    }
};

// Sample products data
const sampleProducts = [
    {
        id: 1,
        name: {
            en: "Gaming Beast Pro X1",
            fr: "Gaming Beast Pro X1",
            ar: "جيمنج بيست برو إكس1"
        },
        category: "gaming",
        price: 2499.99,
        brand: "MSI",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        description: {
            en: "Ultimate gaming laptop with RTX 4080 graphics and Intel i9 processor for maximum performance.",
            fr: "Ordinateur portable de gaming ultime avec graphiques RTX 4080 et processeur Intel i9 pour des performances maximales.",
            ar: "حاسوب محمول للألعاب مع RTX 4080 ومعالج Intel i9 للأداء الأقصى."
        },
        specs: {
            processor: "Intel Core i9-13900HX",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            graphics: "NVIDIA RTX 4080"
        }
    },
    {
        id: 2,
        name: {
            en: "CodeMaster Pro 15",
            fr: "CodeMaster Pro 15",
            ar: "كود ماستر برو 15"
        },
        category: "coding",
        price: 1899.99,
        brand: "Dell",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        description: {
            en: "Perfect for developers with powerful specs, excellent keyboard, and multiple ports for all your coding needs.",
            fr: "Parfait pour les développeurs avec des spécifications puissantes, un excellent clavier et plusieurs ports pour tous vos besoins de codage.",
            ar: "مثالي للمطورين مع مواصفات قوية ولوحة مفاتيح ممتازة ومنافذ متعددة."
        },
        specs: {
            processor: "Intel Core i7-13700H",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            graphics: "Intel Iris Xe"
        }
    },
    {
        id: 3,
        name: {
            en: "Business Elite 14",
            fr: "Business Elite 14",
            ar: "بيزنس إليت 14"
        },
        category: "business",
        price: 1299.99,
        brand: "HP",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
        description: {
            en: "Professional laptop designed for business users with security features and long battery life.",
            fr: "Ordinateur portable professionnel conçu pour les utilisateurs d'entreprise avec des fonctionnalités de sécurité et une longue autonomie.",
            ar: "حاسوب محمول احترافي مصمم للاستخدام التجاري مع ميزات الأمان وعمر بطارية طويل."
        },
        specs: {
            processor: "Intel Core i5-13500H",
            ram: "16GB DDR4",
            storage: "256GB NVMe SSD",
            graphics: "Intel UHD Graphics"
        }
    },
    {
        id: 4,
        name: {
            en: "Creative Studio 16",
            fr: "Creative Studio 16",
            ar: "كريتف ستوديو 16"
        },
        category: "creative",
        price: 2299.99,
        brand: "ASUS",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        description: {
            en: "High-resolution display and powerful graphics for designers, video editors, and creative professionals.",
            fr: "Écran haute résolution et graphiques puissants pour les designers, monteurs vidéo et professionnels créatifs.",
            ar: "شاشة عالية الدقة ورسوميات قوية للمصممين ومحرري الفيديو والمحترفين الإبداعيين."
        },
        specs: {
            processor: "AMD Ryzen 9 7940HS",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            graphics: "NVIDIA RTX 4070"
        }
    },
    {
        id: 5,
        name: {
            en: "Student Companion 14",
            fr: "Student Companion 14",
            ar: "ستيودنت كومبانيون 14"
        },
        category: "education",
        price: 699.99,
        brand: "Acer",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
        description: {
            en: "Affordable and reliable laptop perfect for students with all essential features for studying and research.",
            fr: "Ordinateur portable abordable et fiable parfait pour les étudiants avec toutes les fonctionnalités essentielles pour étudier et rechercher.",
            ar: "حاسوب محمول بأسعار معقولة وموثوق مثالي للطلاب مع جميع الميزات الأساسية للدراسة والبحث."
        },
        specs: {
            processor: "AMD Ryzen 5 5500U",
            ram: "8GB DDR4",
            storage: "256GB NVMe SSD",
            graphics: "AMD Radeon Graphics"
        }
    },
    {
        id: 6,
        name: {
            en: "Gaming Fury 17",
            fr: "Gaming Fury 17",
            ar: "جيمنج فيوري 17"
        },
        category: "gaming",
        price: 1999.99,
        brand: "Lenovo",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop",
        description: {
            en: "Large screen gaming laptop with RGB keyboard and advanced cooling system for intense gaming sessions.",
            fr: "Grand écran d'ordinateur portable de gaming avec clavier RGB et système de refroidissement avancé pour des sessions de jeu intenses.",
            ar: "حاسوب محمول للألعاب بشاشة كبيرة مع لوحة مفاتيح RGB ونظام تبريد متقدم."
        },
        specs: {
            processor: "Intel Core i7-12700H",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            graphics: "NVIDIA RTX 4060"
        }
    },
    {
        id: 7,
        name: {
            en: "Dev Power 13",
            fr: "Dev Power 13",
            ar: "ديف باور 13"
        },
        category: "coding",
        price: 1599.99,
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        description: {
            en: "Compact and powerful laptop with excellent build quality, perfect for mobile development and coding on the go.",
            fr: "Ordinateur portable compact et puissant avec une excellente qualité de construction, parfait pour le développement mobile et le codage en déplacement.",
            ar: "حاسوب محمول صغير وقوي بجودة بناء ممتازة، مثالي للتطوير المحمول والبرمجة أثناء التنقل."
        },
        specs: {
            processor: "Apple M2 Pro",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            graphics: "10-core GPU"
        }
    },
    {
        id: 8,
        name: {
            en: "Business Pro 15",
            fr: "Business Pro 15",
            ar: "بيزنس برو 15"
        },
        category: "business",
        price: 1799.99,
        brand: "ThinkPad",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        description: {
            en: "Enterprise-grade laptop with military-grade durability, advanced security features, and professional performance.",
            fr: "Ordinateur portable de qualité entreprise avec durabilité de grade militaire, fonctionnalités de sécurité avancées et performances professionnelles.",
            ar: "حاسوب محمول بمستوى المؤسسات مع متانة عسكرية وميزات أمان متقدمة وأداء احترافي."
        },
        specs: {
            processor: "Intel Core i7-13700H",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            graphics: "Intel Iris Xe"
        }
    }
];

// Initialize data - Using variables instead of localStorage for online compatibility
function initializeData() {
    // Initialize with sample data if empty
    if (products.length === 0) {
        products = [...sampleProducts];
    }
    
    updateCartUI();
    displayProducts();
}

// Language functions
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    
    // Update HTML direction for Arabic
    const html = document.documentElement;
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', currentLanguage);
        document.body.classList.remove('rtl');
    }
    
    updateTexts();
    displayProducts();
}

function updateTexts() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function getText(key) {
    return translations[currentLanguage][key] || key;
}

// Product functions
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name[currentLanguage]}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name[currentLanguage]}</h3>
                <p class="product-category">${product.brand}</p>
                <p class="product-price">$${product.price}</p>
                <p class="product-description">${product.description[currentLanguage]}</p>
                <div class="product-specs">
                    <div><span>Processor:</span> <span>${product.specs.processor}</span></div>
                    <div><span>RAM:</span> <span>${product.specs.ram}</span></div>
                    <div><span>Storage:</span> <span>${product.specs.storage}</span></div>
                    <div><span>Graphics:</span> <span>${product.specs.graphics}</span></div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    ${getText('add-to-cart')}
                </button>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    currentFilter = category;
    
    // Update active filter button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[onclick="filterCategory('${category}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    displayProducts();
    
    // Scroll to products section
    if (category !== 'all') {
        scrollToProducts();
    }
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    displayCart();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartUI();
            displayCart();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        displayCart();
        modal.style.display = 'block';
    }
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name[currentLanguage]}">
            <div class="cart-item-info">
                <h4>${item.name[currentLanguage]}</h4>
                <p>$${item.price}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Order functions
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    toggleCart();
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    
    const orderData = {
        id: Date.now(),
        customerName: document.getElementById('customerName').value,
        customerEmail: document.getElementById('customerEmail').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerAddress: document.getElementById('customerAddress').value,
        orderNotes: document.getElementById('orderNotes').value,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'pending',
        date: new Date().toISOString()
    };
    
    orders.push(orderData);
    
    // Clear cart
    cart = [];
    updateCartUI();
    
    // Close modal
    closeOrderModal();
    
    // Show success message
    showNotification('Order placed successfully! We will contact you soon.');
    
    // Reset form
    document.getElementById('orderForm').reset();
    
    // Send order notification (you can integrate with email service)
    console.log('New Order:', orderData);
}

// Admin functions
function loadAdminData() {
    updateDashboardStats();
    loadAdminProducts();
    loadAdminOrders();
}

function updateDashboardStats() {
    const totalProducts = document.getElementById('totalProducts');
    const totalOrders = document.getElementById('totalOrders');
    const pendingOrders = document.getElementById('pendingOrders');
    const revenue = document.getElementById('revenue');
    
    if (totalProducts) totalProducts.textContent = products.length;
    if (totalOrders) totalOrders.textContent = orders.length;
    if (pendingOrders) {
        const pending = orders.filter(order => order.status === 'pending').length;
        pendingOrders.textContent = pending;
    }
    if (revenue) {
        const totalRevenue = orders
            .filter(order => order.status !== 'cancelled')
            .reduce((sum, order) => sum + order.total, 0);
        revenue.textContent = totalRevenue.toFixed(2);
    }
}

function loadAdminProducts() {
    const tbody = document.getElementById('adminProductsTable');
    if (!tbody) return;
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name.en}</td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td>${product.brand}</td>
            <td>
                <button onclick="editProduct(${product.id})" class="btn-edit">${getText('edit')}</button>
                <button onclick="deleteProduct(${product.id})" class="btn-delete">${getText('delete')}</button>
            </td>
        </tr>
    `).join('');
}

function loadAdminOrders() {
    const tbody = document.getElementById('adminOrdersTable');
    if (!tbody) return;
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.customerEmail}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>
                <select onchange="updateOrderStatus(${order.id}, this.value)" class="status-select">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>${getText('pending')}</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>${getText('processing')}</option>
                    <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>${getText('shipped')}</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>${getText('delivered')}</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>${getText('cancelled')}</option>
                </select>
            </td>
            <td>${new Date(order.date).toLocaleDateString()}</td>
            <td>
                <button onclick="viewOrderDetails(${order.id})" class="btn-view">View</button>
                <button onclick="deleteOrder(${order.id})" class="btn-delete">${getText('delete')}</button>
            </td>
        </tr>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        showNotification('Order status updated successfully!');
        updateDashboardStats();
    }
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const details = `
        Order ID: #${order.id}
        Customer: ${order.customerName}
        Email: ${order.customerEmail}
        Phone: ${order.customerPhone}
        Address: ${order.customerAddress}
        Status: ${order.status}
        Date: ${new Date(order.date).toLocaleString()}
        
        Items:
        ${order.items.map(item => `- ${item.name.en} x${item.quantity} ($${item.price})`).join('\n')}
        
        Total: $${order.total.toFixed(2)}
        
        Notes: ${order.orderNotes || 'None'}
    `;
    
    alert(details);
}

function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        orders = orders.filter(o => o.id !== orderId);
        loadAdminOrders();
        updateDashboardStats();
        showNotification('Order deleted successfully!');
    }
}

// Product management functions
function showAddProductForm() {
    document.getElementById('productModal').style.display = 'block';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('modalTitle').textContent = getText('admin-add-product');
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModal').style.display = 'block';
    document.getElementById('modalTitle').textContent = getText('edit') + ' Product';
    
    // Fill form with product data
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name.en;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productBrand').value = product.brand;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description.en;
    document.getElementById('productProcessor').value = product.specs.processor;
    document.getElementById('productRam').value = product.specs.ram;
    document.getElementById('productStorage').value = product.specs.storage;
    document.getElementById('productGraphics').value = product.specs.graphics;
}

function saveProduct(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const productId = formData.get('productId');
    
    const productData = {
        id: productId ? parseInt(productId) : Date.now(),
        name: {
            en: formData.get('productName'),
            fr: formData.get('productName'), // For simplicity, using English for all languages
            ar: formData.get('productName')
        },
        category: formData.get('productCategory'),
        price: parseFloat(formData.get('productPrice')),
        brand: formData.get('productBrand'),
        image: formData.get('productImage'),
        description: {
            en: formData.get('productDescription'),
            fr: formData.get('productDescription'),
            ar: formData.get('productDescription')
        },
        specs: {
            processor: formData.get('productProcessor'),
            ram: formData.get('productRam'),
            storage: formData.get('productStorage'),
            graphics: formData.get('productGraphics')
        }
    };
    
    if (productId) {
        // Update existing product
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            products[index] = productData;
            showNotification('Product updated successfully!');
        }
    } else {
        // Add new product
        products.push(productData);
        showNotification('Product added successfully!');
    }
    
    closeProductModal();
    loadAdminProducts();
    updateDashboardStats();
    displayProducts();
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        loadAdminProducts();
        updateDashboardStats();
        displayProducts();
        showNotification('Product deleted successfully!');
    }
}

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Load admin data if admin section is shown
    if (sectionId === 'admin') {
        loadAdminData();
    }
}

// Utility functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const orderModal = document.getElementById('orderModal');
    const productModal = document.getElementById('productModal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    updateTexts();
    
    // Set default language select
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Show home section by default
    showSection('home');
});
