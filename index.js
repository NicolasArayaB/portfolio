const links = document.querySelectorAll(".menu a")

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

const show = () => {
  let links = document.querySelector(".petCloudLinks")
  console.log(links.style.display)
  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}
