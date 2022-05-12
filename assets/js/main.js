// animation
const text = document.querySelectorAll(".thePaths");

// for (let i = 0; i < text.length; i++) {
//   console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
// }

const lastWord = document.querySelector("#seventeenth");
const animation = document.querySelector("div.animation");
const animationSmall = document.querySelector("div.animationSmall");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity: 0; pointer-events:none;";
});
animation.addEventListener("click", function () {
  animation.style.display = "none";
});

// set Attributes
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
// add smallScreen
// if (window.screen.width < 446) {
//   text.forEach((e) => {
//     e.classList.add("smallScreen");
//     console.log(e.classList);
//   });
// } else {
//   text.forEach((e) => {
//     e.classList.remove("smallScreen");
//   });
// }

const favIcon = document.getElementById("favControl");
const myName = document.querySelectorAll("div.animationSmall h1");
const myNameSpan = document.querySelectorAll("div.animationSmall h1 span");
const imgIcon = document.querySelector(".favicon__img");
favIcon.addEventListener("change", function () {
  if (this.checked == true) {
    myName.forEach((e) => {
      e.classList.add("bigger");
    });
    setTimeout(() => {
      imgIcon.style.display = "none";
      myName.forEach((e) => {
        e.classList.add("paused");
      });
      myNameSpan.forEach((e) => {
        e.classList.add("paused");
      });
    }, 2000);
    setTimeout(() => {
      animationSmall.style.display = "none";
    }, 4000);
    animationSmall.addEventListener("click", function () {
      animationSmall.style.display = "none";
    });
    console.log("There you go!");
  } else {
    console.log("not checked!");
  }
});
function checkBox() {
  if (favIcon.checked == false) {
    favIcon.checked = true;
    console.log("checked");
    favIcon.dispatchEvent(new Event("change"));
  }
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
navLink.forEach((n) => n.addEventListener("click", checkBox));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  // Validate if the user previously chose a topic
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

if (themeButton.classList.contains("uil-sun")) {
  // console.log("nothing");
} else {
  console.log(text[0]);
  console.log(myName);
  myName.forEach((e) => {
    e.style =
      "text-shadow: 0 0 40px rgba(0,0,0,0.3); color: hsl(170, 28%, 16%);";
  });
  text.forEach((e) => {
    e.attributes.stroke.value = "hsl(170, 28%, 16%)";
    // setAttributes(e, { color: "hsl(170, 57%, 53%)" }); try another way to set svg color.
  });
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

function onload() {
  if (!localStorage.getItem("first")) themeButton.click();
  localStorage.setItem("first", true);
}
onload();
