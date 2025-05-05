// Typing effect
const sentences = [
  "Passionate about Coding",
  "Web Developer",
  "Problem Solver",
  "Always Learning New Things",
  "Open to Opportunities"
];
let currentIndex = 0;
let currentChar = 0;
let typingElement = document.getElementById('typed-text');

function type() {
  if (currentChar < sentences[currentIndex].length) {
    typingElement.textContent += sentences[currentIndex].charAt(currentChar);
    currentChar++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentChar > 0) {
    typingElement.textContent = sentences[currentIndex].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(erase, 50);
  } else {
    currentIndex = (currentIndex + 1) % sentences.length;
    setTimeout(type, 500);
  }
}

type();

// Modal logic
const openBtn = document.getElementById("openVideos");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent body scrolling
};

closeBtn.onclick = () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Re-enable body scrolling
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // Re-enable body scrolling
  }
};

