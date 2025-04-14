const patternLayer = document.getElementById("patternLayer");
const scaleSlider = document.getElementById("scaleSlider");
const thumbnails = document.querySelectorAll(".thumb");
const mainMockup = document.getElementById("mainMockup");

let currentIndex = 0;

// Image URLs (change these)
const mockupImages = [
  "https://production-cdn1.patternbank.com/uploads/masks/size_600/swimwear_swimsuit.png?1680703590",
  "https://production-cdn.patternbank.com/uploads/masks/size_600/giftware_tote_bag.png?1680703614",
  "https://production-cdn1.patternbank.com/uploads/masks/size_600/interiors_small_curtain.png?1680703593",
  "https://production-cdn.patternbank.com/uploads/masks/size_600/menswear_bomber_jacket.png?1680703623",
];

scaleSlider.addEventListener("input", () => {
  const scale = scaleSlider.value;
  patternLayer.style.backgroundSize = `${scale * 100}px`;
});

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    updateMockup(index);
  });
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + mockupImages.length) % mockupImages.length;
  updateMockup(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % mockupImages.length;
  updateMockup(currentIndex);
});

function updateMockup(index) {
  currentIndex = index;
  mainMockup.src = mockupImages[index];

  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  thumbnails[index].classList.add("active");
}
const patternThumbs = document.querySelectorAll(".pattern-thumb");

patternThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const selectedPattern = thumb.getAttribute("data-pattern");
    patternLayer.style.backgroundImage = `url('${selectedPattern}')`;

    // remove 'active' class from all thumbs and add to clicked one
    patternThumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});
