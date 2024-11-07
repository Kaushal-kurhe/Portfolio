// script.js

document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.getElementById("scrollingText");
    const container = document.querySelector(".moving-text");
  
    // Initial position for the text
    let position = container.offsetWidth;
  
    // Move text from right to left
    function moveText() {
      position--; // Move 1 pixel left
  
      // Reset position if text goes completely out of view
      if (position < -scrollingText.offsetWidth) {
        position = container.offsetWidth;
      }
  
      scrollingText.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveText);
    }
  
    moveText(); // Start moving the text
  });
  