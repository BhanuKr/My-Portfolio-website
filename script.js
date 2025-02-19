function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#animated-text", {
  strings: ["a Mathematics and Computing Student at IISc", "Passionate About Intelligent Systems", "an Engineer at Heart", "a Science and Tech Enthusiast"],
  typeSpeed: 30,      // Speed of typing
  backSpeed: 50,      // Speed of deleting
  backDelay: 3000,    // Delay before deleting
  loop: true          // Repeat the animation
})

