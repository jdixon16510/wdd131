// Footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Review Counter
const reviewCounterKey = "reviewCount";

// Get current count from localStorage or start at 0
let reviewCount = Number(localStorage.getItem(reviewCounterKey)) || 0;
reviewCount++;

// Save updated count
localStorage.setItem(reviewCounterKey, reviewCount);

// Display count
const countElement = document.getElementById("review-count");
if (countElement) {
  countElement.textContent = reviewCount;
}
