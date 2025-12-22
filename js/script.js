// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const destinationsGrid = document.getElementById('destinations-grid');

// Mock Data
const destinations = [
    {
        id: 1,
        title: "Magh Mela 2026",
        image: "images/Magh-Mela-2026.webp",
        days: "3 Days",
        type: "Spiritual",
        price: "₹20,000"
    },
    {
        id: 2,
        title: "Varanasi (Kashi)",
        image: "varanasi.png",
        days: "3 Days",
        type: "Spiritual",
        price: "₹12,000"
    },
    {
        id: 3,
        title: "Rishikesh & Haridwar",
        image: "reshikesh.png",
        days: "5 Days",
        type: "Spiritual & Adventure",
        price: "₹15,000"
    },
    {
        id: 4,
        title: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        days: "6 Days",
        type: "Nature",
        price: "₹22,000"
    },
    {
        id: 5,
        title: "Jaipur & Udaipur",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
        days: "4 Days",
        type: "Heritage",
        price: "₹18,500"
    }
];

// Functions

// Packages Data
const packages = [
    {
        id: 1,
        title: "Char Dham Yatra",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        duration: "10 Days / 9 Nights",
        type: "Pilgrimage",
        price: "₹35,000",
        features: ["Hotels", "Meals", "Transport", "Guide"]
    },
    {
        id: 2,
        title: "Golden Triangle Tour",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
        duration: "6 Days / 5 Nights",
        type: "Heritage",
        price: "₹18,500",
        features: ["Hotels", "Breakfast", "Sightseeing", "Guide"]
    },
    {
        id: 3,
        title: "South India Temple Tour",
        image: "southindia.png",
        duration: "8 Days / 7 Nights",
        type: "Spiritual",
        price: "₹24,000",
        features: ["Hotels", "Darshan", "Transport", "Meals"]
    }
];

// Toggle Mobile Menu
function toggleMenu() {
    mobileMenu.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Render Destinations
function renderDestinations() {
    if (!destinationsGrid) return;

    destinationsGrid.innerHTML = destinations.map(dest => `
        <article class="card">
            <div class="card-img-wrapper">
                <img src="${dest.image}" alt="${dest.title}" loading="lazy">
            </div>
            <div class="card-content">
                <h3 class="card-title">${dest.title}</h3>
                <div class="card-meta">
                    <span class="card-meta-item"><i data-lucide="clock" class="w-4 h-4"></i> ${dest.days}</span>
                    <span class="card-meta-item"><i data-lucide="map" class="w-4 h-4"></i> ${dest.type}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                    <span style="font-weight: 700; color: var(--primary); font-size: 1.1rem;">${dest.price} <span style="display: inline-block; background: var(--secondary); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">PP</span></span>
                    <a href="https://wa.me/919667370992?text=I%27m%20interested%20in%20${encodeURIComponent(dest.title)}%20trip." target="_blank" class="btn btn-outline" style="color: var(--secondary); border-color: var(--secondary); padding: 0.5rem 1rem; font-size: 0.9rem;">View Details</a>
                </div>
            </div>
        </article>
    `).join('');
}

// Render Packages
function renderPackages() {
    const packagesGrid = document.getElementById('packages-grid');
    if (!packagesGrid) return;

    packagesGrid.innerHTML = packages.map(pkg => `
        <article class="package-card">
            <img src="${pkg.image}" alt="${pkg.title}" class="package-image" loading="lazy">
            <div class="package-content">
                <div class="package-tags">
                    <span class="badge badge-primary">${pkg.type}</span>
                </div>
                <h3 class="package-title">${pkg.title}</h3>
                <p style="font-size: 0.875rem; color: var(--text-light);"><i data-lucide="calendar" style="width: 14px; display:inline;"></i> ${pkg.duration}</p>
                
                <ul class="package-features">
                    ${pkg.features.map(f => `<li class="package-feature"><i data-lucide="check-circle" style="width: 14px; color: green;"></i> ${f}</li>`).join('')}
                </ul>

                <div class="package-price-row">
                    <div class="price-tag">
                        <span class="price-label">Starting from</span>
                        <span class="price-amount">${pkg.price}</span>
                    </div>
                    <a href="https://wa.me/919667370992?text=I%20want%20to%20book%20${encodeURIComponent(pkg.title)}%20package." target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Book Now</a>
                </div>
            </div>
        </article>
    `).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

    // Click outside to close menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) toggleMenu();
        });
    }

    // Initialize Content
    renderDestinations();
    renderPackages();

    // Re-initialize icons after rendering dynamic content
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Smooth Scroll for Anchor Links (Optional overlap with CSS smooth-scroll but good for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            // Close menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                toggleMenu();
            }

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
