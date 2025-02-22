function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#animated-text", {
  strings: ["a Mathematics and Computing undergrad at IISc", "passionate about Intelligent Systems", "an Engineer at Heart", "a Science and Tech Enthusiast"],
  typeSpeed: 40,      // Speed of typing
  backSpeed: 60,      // Speed of deleting
  backDelay: 3000,    // Delay before deleting
  loop: true          // Repeat the animation
})

