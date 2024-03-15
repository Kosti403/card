const CLIENT_ID = "mn1GmQR_maeKWSuHnnBBDSd_G0NEgmgcdsU6XIIss5w";
const slider = document.getElementById("slider");

let state = [];
let currentSlide;

const fetchPhoto = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.length) {
        state = data;
        currentSlide = data[0].id;
        setPhotos();
      }
    } else {
      console.error("Error or rate limit exceeded");
    }
  } catch (error) {
    console.error(error);
  }
};

const renderItem = () => {
  return state
    .map(({ urls: { regular }, user: { name }, id }) => {
      const isActive = currentSlide === id ? "active" : "";
      return `<div class="slide ${isActive}" data-id=${id} style="background-image: url(${regular})">
    <div class="slide-text">
    <span> photo by </span>
    ${name}
    </div>
  </div>`;
    })
    .join("");
};

const handleClick = ({ currentTarget }) => {
  const slides = document.querySelectorAll(".slide");
  const { id } = currentTarget.dataset;
  if (id === currentSlide) return;
  slides.forEach((slide) => slide.classList.remove("active"));
  currentTarget.classList.add("active");
  currentSlide = id;
};

const setPhotos = () => {
  slider.innerHTML = renderItem();
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.addEventListener("click", handleClick);
  });
};

fetchPhoto();
