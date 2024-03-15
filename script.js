const CLIENT_ID = "kfchB4vUrI8Lg69oT6lfTesriOq3lqCVN0i5fpYoFV0";
const slider = document.getElementById("slider");

let slides;
let state = [];
let currentSlide;

const fetchPhoto = async () => {
  const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4&query=food`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchPhoto();
