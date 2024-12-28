// Countdown Timer
const timer = document.getElementById("timer");

function updateCountdown() {
  const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
  const now = new Date().getTime();
  const difference = newYear - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Photo Slideshow
const images = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"]; // Add your image file names here
const slideshowImg = document.getElementById("slideshowImg");
let currentImageIndex = 0;
function updateSlideshow() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  console.log("Loading image:", images[currentImageIndex]); // Debugging
  slideshow.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Function to update the image in the slideshow
function updateSlideshow() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
  slideshowImg.src = images[currentImageIndex];
}

// Set an interval to change the image every 3 seconds
setInterval(updateSlideshow, 3000);

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshowImg.src = images[currentImageIndex];
}, 3000);

// Music Player
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Play Music";
  }
});
