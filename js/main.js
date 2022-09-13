const menu = document.querySelector("#menu-btn");
const list = document.querySelector("#list");

window.addEventListener("");

// home
menu.addEventListener("click", (eo) => {
  menu.classList.toggle("fa-times");
  list.classList.toggle("active");
});
var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// food
var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// popup food

const slider = document.querySelectorAll(".food .slide");
const previewContainer = document.querySelector(".food-preview-container");
const preview = document.querySelectorAll(".food-preview");

slider.forEach((slider) => {
  slider.addEventListener("click", (slide) => {
    previewContainer.style.display = "flex";
    let slideIndex = slider.getAttribute("data-food");
    preview.forEach((preview) => {
      let previewIndex = preview.getAttribute("data-preview");
      if (slideIndex == previewIndex) {
        preview.classList.add("active");
      }
    });
  });
});

const decilne = document.querySelector("#close-preview");

decilne.addEventListener("click", (eo) => {
  previewContainer.style.display = "none";
  preview.forEach((perview) => {
    perview.classList.remove("active");
  });
});

// menu

var swiper = new Swiper(".menu-slide", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  const box = document.getElementById("box");

  if (!box.contains(event.target)) {
    box.style.display = "none";
  }
});
