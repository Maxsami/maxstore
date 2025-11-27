// Data from original React component
const gallerySlides = [
  {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Grand Banquet Hall",
    subtitle: "Where memories are made"
  },
  {
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Gokul Raj Dining",
    subtitle: "A taste of elegance"
  },
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Royal Comfort",
    subtitle: "Rest like a king"
  }
];

const luxuryRooms = [
  { id: 1, name: "Premium Suite", price: "Rs. 5000", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", desc: "King size bed, city view, 80 sqft spacious area.", badge: "Best Seller" },
  { id: 2, name: "Deluxe Executive", price: "Rs. 3500", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", desc: "Modern amenities for business travelers.", badge: "Top Value" },
  { id: 3, name: "Standard Luxury", price: "Rs. 2500", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80", desc: "Comfortable stay with all basic luxury needs.", badge: null }
];

const familyRooms = [
  { id: 101, name: "Grand Family Suite", price: "Rs. 6000", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80", desc: "Two connecting rooms with large living space.", badge: "Families Love This" },
  { id: 102, name: "Quadruple Comfort", price: "Rs. 5500", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80", desc: "4 beds, ideal for large families.", badge: null },
  { id: 103, name: "Triple Deluxe", price: "Rs. 4500", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", desc: "One double and one single bed configuration.", badge: null }
];

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

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("main-nav");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const servicesBtn = document.getElementById("services-btn");
  const servicesBtnHero = document.getElementById("services-btn-hero");
  const servicesBtnMobile = document.getElementById("services-btn-mobile");
  const btnExploreServices = document.getElementById("btn-explore-services");
  const bookHotelBtn = document.getElementById("book-hotel-btn");
  const btnBookStay = document.getElementById("btn-book-stay");
  const servicesModal = document.getElementById("services-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const roomsGrid = document.getElementById("rooms-grid");
  const btnRoomsLuxury = document.getElementById("btn-rooms-luxury");
  const btnRoomsFamily = document.getElementById("btn-rooms-family");
  const menuGrid = document.getElementById("menu-grid");
  const tabButtons = document.querySelectorAll(".tab-option");
  const contactBox = document.getElementById("contact-box");

  // Slider elements
  const galleryImage = document.getElementById("gallery-image");
  const galleryTitle = document.getElementById("gallery-title");
  const gallerySubtitle = document.getElementById("gallery-subtitle");
  const galleryDotsContainer = document.getElementById("gallery-dots");
  const btnPrevSlide = document.getElementById("btn-prev-slide");
  const btnNextSlide = document.getElementById("btn-next-slide");

  let currentRoomCategory = "luxury";
  let currentMenuCategory = "veg";
  let currentSlide = 0;
  let slideIntervalId = null;

  // Sticky nav on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // Mobile menu toggle
  const closeMobileMenu = () => {
    mobileMenu.classList.remove("open");
    mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  };

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Render rooms
  const renderRooms = () => {
    const rooms = currentRoomCategory === "luxury" ? luxuryRooms : familyRooms;
    roomsGrid.innerHTML = rooms.map(room => `
      <article class="room-card">
        <div class="room-image-wrapper">
          <img src="${room.img}" alt="${room.name}">
          ${room.badge ? `<div class="room-badge">${room.badge}</div>` : ""}
          <div class="room-price-bar">
            ${room.price} <span>/ night</span>
          </div>
        </div>
        <div class="room-body">
          <h3>${room.name}</h3>
          <p>${room.desc}</p>
          <div class="room-footer">
            <div class="room-icons">
              <i class="fa-solid fa-wifi"></i>
              <i class="fa-solid fa-mug-saucer"></i>
              <i class="fa-solid fa-bed"></i>
            </div>
            <button class="room-book" type="button">
              <span>Book Now</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `).join("");
  };

  // Room category switching
  btnRoomsLuxury.addEventListener("click", () => {
    currentRoomCategory = "luxury";
    btnRoomsLuxury.classList.add("pill-active");
    btnRoomsFamily.classList.remove("pill-active");
    renderRooms();
  });

  btnRoomsFamily.addEventListener("click", () => {
    currentRoomCategory = "family";
    btnRoomsFamily.classList.add("pill-active");
    btnRoomsLuxury.classList.remove("pill-active");
    renderRooms();
  });

  // Initial rooms render
  renderRooms();

  // Render menu items
  const renderMenu = () => {
    const items = menuData[currentMenuCategory];
    menuGrid.innerHTML = items.map(item => `
      <div class="menu-card">
        <div>
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
        <span>${item.price}</span>
      </div>
    `).join("");
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-menu");
      currentMenuCategory = cat;

      tabButtons.forEach(b => b.classList.remove("tab-active"));
      btn.classList.add("tab-active");

      renderMenu();
    });
  });

  // Initial menu render
  renderMenu();

  // Services modal
  const openServicesModal = () => {
    servicesModal.classList.add("open");
  };

  const closeServicesModal = () => {
    servicesModal.classList.remove("open");
  };

  [servicesBtn, servicesBtnHero, servicesBtnMobile, btnExploreServices].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", openServicesModal);
    }
  });

  modalCloseBtn.addEventListener("click", closeServicesModal);

  servicesModal.addEventListener("click", (e) => {
    if (e.target === servicesModal) {
      closeServicesModal();
    }
  });

  // Scroll to contact box
  const scrollToContact = () => {
    if (contactBox) {
      contactBox.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (bookHotelBtn) bookHotelBtn.addEventListener("click", scrollToContact);
  if (btnBookStay) btnBookStay.addEventListener("click", scrollToContact);

  // Gallery slider
  const renderDots = () => {
    galleryDotsContainer.innerHTML = gallerySlides.map((_, index) => `
      <div class="gallery-dot ${index === currentSlide ? "active" : ""}" data-index="${index}"></div>
    `).join("");
  };

  const renderSlide = () => {
    const slide = gallerySlides[currentSlide];
    galleryImage.src = slide.image;
    galleryTitle.textContent = slide.title;
    gallerySubtitle.textContent = slide.subtitle;
    renderDots();
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % gallerySlides.length;
    renderSlide();
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
    renderSlide();
  };

  btnNextSlide.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
  });

  btnPrevSlide.addEventListener("click", () => {
    prevSlide();
    restartAutoSlide();
  });

  galleryDotsContainer.addEventListener("click", (e) => {
    const dot = e.target.closest(".gallery-dot");
    if (!dot) return;
    const index = Number(dot.getAttribute("data-index"));
    currentSlide = index;
    renderSlide();
    restartAutoSlide();
  });

  const startAutoSlide = () => {
    slideIntervalId = setInterval(nextSlide, 4000);
  };

  const restartAutoSlide = () => {
    if (slideIntervalId) clearInterval(slideIntervalId);
    startAutoSlide();
  };

  // Initial gallery setup
  renderSlide();
  startAutoSlide();
});
