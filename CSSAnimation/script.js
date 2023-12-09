const slider = document.getElementById('slider');

// Function to animate the slider
function animateSlider() {

  const newColor = getRandomColor();
  slider.style.backgroundColor = newColor;

  slider.style.transform = 'translateY(calc(100vh - 100px))';

  setTimeout(() => {
    slider.style.transform = 'translateY(0)';
  }, 1000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(animateSlider, 2000);