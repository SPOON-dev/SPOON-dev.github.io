// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// A tiny bit of interactivity: show a greeting when the button is clicked
const button = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {
  const hour = new Date().getHours();
  const part = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  greeting.textContent = `Good ${part}, and welcome!`;
});
