import { animateOnView } from "@/shared/utilities/helperFunctions";
import { animate } from "motion/mini";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// start Instructors Section
const swiperInstructors = new Swiper("#swiperInstructors", {
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
  modules: [Navigation],
});

const selectedCInstructorsHeader = document.getElementById("instructorsHeader");

if (selectedCInstructorsHeader) {
  animateOnView(
    selectedCInstructorsHeader,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

// End Instructors Section

//
