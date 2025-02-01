// Countdown Timer
const countdownElement = document.getElementById("countdown");

// Set the date we're counting down to (April 13, 2024)
const countDownDate = new Date("April 13, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  countdownElement.innerHTML = `រាប់ថយក្រោយ : ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Songkran Festival has started!";
  }
}, 1000);

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Highlight Event on Hover
document.querySelectorAll(".event").forEach((event) => {
  event.addEventListener("mouseenter", () => {
    event.style.backgroundColor = "#cfe2ff";
    event.style.borderColor = "#007acc";
  });

  event.addEventListener("mouseleave", () => {
    event.style.backgroundColor = "#e6f7ff";
    event.style.borderColor = "#00bfff";
  });
});
