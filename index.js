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
