// Navigation and Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
let menuOpen = false;

// Toggle menu
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('open');
  menuOpen = !menuOpen;
});

// Handle navigation clicks
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Close menu if open
    if (menuOpen) {
      menuBtn.classList.remove('open');
      menu.classList.remove('open');
      menuOpen = false;
    }

    // Get target section and scroll
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerOffset = 80;
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
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const currentId = section.getAttribute('id');
      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Show link options
const show = () => {
  let links = document.querySelector(".petCloudLinks")

  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}
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

// Show link options
const show = () => {
  let links = document.querySelector(".petCloudLinks")

  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}

// Animate subtitles on scroll
const callback = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

let observer = new IntersectionObserver(callback);
const targets = document.querySelectorAll(".change-on-scroll");

targets.forEach(function (target) {
  observer.observe(target);
});

// Hamburger Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');

let menuOpen = false;

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

// Close menu when clicking menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
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
