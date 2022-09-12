// MENU
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
// SLIDER
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,

  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  dynamicBullets: true,
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// SCROOL REVEVAL
ScrollReveal().reveal('#container', { delay: 500, reset: true });
ScrollReveal().reveal('.map', { delay: 1000, reset: true });
ScrollReveal().reveal('.titulo-map', { delay: 700, reset: true });


// MAPA
function initMap() {
  const darach = { lat: -18.8523619, lng: -41.9472816 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: darach,
  });

  const contentString = '<p style="color: black; font-size: 13px; padding: 10px; border-bottom: 2px solid black;">Darach Advocacia </p>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: darach,
    map,
    title: "Darach Advocacia",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}


window.initMap = initMap;

