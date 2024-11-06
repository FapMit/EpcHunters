const initBurger = () => {
  const burgerNode = document.querySelector(".js-burger");
  const menuNode = document.querySelector(".js-menu");
  const pageNode = document.querySelector(".js-page");

  burgerNode.addEventListener("click", (e) => {
    e.preventDefault();
    burgerNode.classList.toggle("burger--active");
    menuNode.classList.toggle("menu--active");
  });

  pageNode.addEventListener("click", (e) => {
    e.preventDefault();
    if (burgerNode.classList.contains("burger--active")) {
      burgerNode.classList.remove("burger--active");
      menuNode.classList.remove("menu--active");
    }
  });
};

export default initBurger;
