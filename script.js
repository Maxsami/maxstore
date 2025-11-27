// Wait for the DOM to be fully loaded before running initialization logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Initial render of the Veg menu
    switchMenu('veg');
});

// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/95', 'backdrop-blur-md', 'shadow-2xl', 'py-3', 'border-b', 'border-orange-900/30');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-black/95', 'backdrop-blur-md', 'shadow-2xl', 'py-3', 'border-b', 'border-orange-900/30');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// 2. Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 3. Helper to Scroll to Contact
function scrollToContact() {
    const contactBox = document.getElementById('contact-box');
    if (contactBox) {
        contactBox.scrollIntoView({ behavior: 'smooth' });
    }
}

// 4. Room Category Switcher
function switchRooms(category) {
    const luxuryBtn = document.getElementById('btn-luxury');
    const familyBtn = document.getElementById('btn-family');
    const luxuryGrid = document.getElementById('rooms-luxury');
    const familyGrid = document.getElementById('rooms-family');

    if (category === 'luxury') {
        luxuryBtn.className = "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-black text-white shadow-lg font-[Inter] cursor-pointer";
        familyBtn.className = "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 text-gray-500 hover:text-black font-[Inter] cursor-pointer";
        luxuryGrid.classList.remove('hidden');
        familyGrid.classList.add('hidden');
    } else {
        familyBtn.className = "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-black text-white shadow-lg font-[Inter] cursor-pointer";
        luxuryBtn.className = "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 text-gray-500 hover:text-black font-[Inter] cursor-pointer";
        familyGrid.classList.remove('hidden');
        luxuryGrid.classList.add('hidden');
    }
}

// 5. Menu Switcher & Data
const menuData = {
    veg: [
        { name: "Paneer Butter Masala", price: "Rs. 280", desc: "Cottage cheese in rich tomato gravy" },
        { name: "Dal Makhani", price: "Rs. 220", desc: "Black lentils cooked overnight with cream" },
        { name: "Vegetable Biryani", price: "Rs. 250", desc: "Aromatic basmati rice with mixed veggies" },
        { name: "Malai Kofta", price: "Rs. 290", desc: "Potato and paneer dumplings in white gravy" },
        { name: "Mushroom Do Pyaza", price: "Rs. 270", desc: "Mushrooms cooked with plenty of onions" }
    ],
    nonveg: [
        { name: "Butter Chicken", price: "Rs. 380", desc: "Tandoori chicken in creamy tomato sauce" },
        { name: "Chicken Curry", price: "Rs. 320", desc: "Traditional homestyle spicy chicken curry" },
        { name: "Mutton Rogan Josh", price: "Rs. 450", desc: "Tender mutton cooked with Kashmiri spices" },
        { name: "Fish Curry", price: "Rs. 350", desc: "Fresh river fish in mustard gravy" },
        { name: "Chicken Biryani", price: "Rs. 340", desc: "Layered aromatic rice with tender chicken" }
    ],
    snacks: [
        { name: "Paneer Tikka", price: "Rs. 260", desc: "Char-grilled marinated cottage cheese cubes" },
        { name: "Chicken Tikka", price: "Rs. 320", desc: "Spicy yogurt marinated chicken chunks" },
        { name: "French Fries", price: "Rs. 120", desc: "Crispy golden potato fingers" },
        { name: "Veg Pakora", price: "Rs. 150", desc: "Assorted vegetable fritters" },
        { name: "Spring Rolls", price: "Rs. 180", desc: "Crispy rolls filled with savory vegetables" }
    ]
};

function renderMenu(category) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear current
    menuData[category].forEach(item => {
        const div = document.createElement('div');
        div.className = "bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex justify-between items-start gap-4 font-[Inter]";
        div.innerHTML = `
            <div>
                <h4 class="font-bold text-lg text-gray-900 mb-1">${item.name}</h4>
                <p class="text-xs text-gray-500 line-clamp-2">${item.desc}</p>
            </div>
            <span class="font-bold text-orange-600 whitespace-nowrap">${item.price}</span>
        `;
        container.appendChild(div);
    });
}

function switchMenu(category) {
    // Update Buttons
    ['veg', 'nonveg', 'snacks'].forEach(c => {
        const btn = document.getElementById(`btn-${c}`);
        if (c === category) {
            btn.className = "px-8 py-3 rounded-full font-bold transition-all capitalize bg-orange-600 text-white shadow-lg scale-105 font-[Inter] cursor-pointer";
        } else {
            btn.className = "px-8 py-3 rounded-full font-bold transition-all capitalize bg-white text-gray-600 hover:bg-gray-200 border border-gray-200 font-[Inter] cursor-pointer";
        }
    });
    // Render Items
    renderMenu(category);
}

// 6. Gallery Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.getElementById('gallery-dots').children;
const totalSlides = slides.length;

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });

    // Update Dots
    Array.from(dots).forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.remove('bg-white/30', 'w-4');
            dot.classList.add('bg-orange-500', 'w-12');
        } else {
            dot.classList.remove('bg-orange-500', 'w-12');
            dot.classList.add('bg-white/30', 'w-4');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// 7. Modal Toggle
function toggleModal(show) {
    const modal = document.getElementById('services-modal');
    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}