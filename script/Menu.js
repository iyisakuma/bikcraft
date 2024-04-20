class MenuMobile {
  constructor(menuMobile, navList, navLinks) {
    this.menuMobile = document.querySelector(menuMobile);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menuMobile.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.menuMobile.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menuMobile) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MenuMobile(
  ".menu-mobile",
  ".menu-desktop",
  ".menu-desktop ul"
);
mobileNavBar.init();
