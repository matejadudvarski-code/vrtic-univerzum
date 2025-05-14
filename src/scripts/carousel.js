export default function carouselScript() {
    document.addEventListener("DOMContentLoaded", function () {
      const carouselElement = document.querySelector("#customCarousel");
      const titleElement = document.querySelector("#carouselTitle");
  
      if (!carouselElement || !titleElement) return;
  
      const slides = [
        "Senzorna Soba", "Dvorište", "Ulazni Hol", "Muzički Centar",
        "Naučno-Istraživački Centar", "Prostor", "Senzorna Tabla", "Soba za Predškolce",
        "Sportska Sala", "Umetnički Centar", "Vrtić Univerzum"  
      ];
  
      carouselElement.addEventListener("slid.bs.carousel", function (event) {
        const activeIndex = [...carouselElement.querySelectorAll(".carousel-item")].indexOf(event.relatedTarget);
        titleElement.textContent = slides[activeIndex];
      });
    });
  }
  