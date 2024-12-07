// toggle  menu

const menuLists = document.querySelector(".nav__lists"),
  menuItems = menuLists.querySelectorAll("li"),
  menuButton = document.querySelector("#menuBtn"),
  icon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  menuLists.classList.toggle("active");

  if (icon.classList.contains("ri-menu-line")) {
    icon.classList.replace("ri-menu-line", "ri-close-fill");
  } else {
    icon.classList.replace("ri-close-fill", "ri-menu-line");
  }
});

menuItems.forEach((menuItems) => {
  menuItems.addEventListener("click", () => {
    menuLists.classList.remove("active");
  });
});
