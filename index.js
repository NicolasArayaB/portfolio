// Navigation and Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');

let menuOpen = false;

// Toggle menu
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
});

// Handle navigation clicks
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Close menu if open
    if (menuOpen) {
      menuBtn.classList.remove('open');
      menu.classList.remove('open');
      menuOpen = false;
    }

    // Get target section and scroll
    const targetId = item.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerOffset = 90;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (menuOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
});

// Update active section on scroll
const updateActiveSection = () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('.wrapper').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const currentId = section.getAttribute('id');
      menuItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(() => {
    updateActiveSection();
  });
});

// Initialize active section
updateActiveSection();

// Animate subtitles on scroll
const callback = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);
const targets = document.querySelectorAll(".change-on-scroll");

targets.forEach(target => {
  observer.observe(target);
});

// Show link options
const show = () => {
  const links = document.querySelector(".petCloudLinks");
  if (links) {
    if (links.style.display === "none" || links.style.display === "") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
  }
};

// Sidebar
const links = document.querySelectorAll("li a")

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function collapse() {
  let navbar = document.getElementById("navbar");

  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}