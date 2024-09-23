const belt = document.querySelector('.belt');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.belt-item').length;

function updateBeltPosition() {
  const itemWidth = document.querySelector('.belt-item').offsetWidth;
  belt.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the start
  updateBeltPosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the end
  updateBeltPosition();
});

  setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
 updateBeltPosition(); }, 3000); // Change slide every 3 seconds
