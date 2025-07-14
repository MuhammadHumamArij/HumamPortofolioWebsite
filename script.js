document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000, // Animation duration in ms
    once: true, // Whether animation should happen only once - while scrolling down
    mirror: false, // Whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // Defines which position of the element should trigger the animation
  });

  // Navbar menu toggle for mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      // Toggle icon between bars and times
      menuToggle.querySelector("i").classList.toggle("fa-bars");
      menuToggle.querySelector("i").classList.toggle("fa-times");
    });

    // Close menu when a nav link is clicked (for one-page scroll)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          menuToggle.querySelector("i").classList.remove("fa-times");
          menuToggle.querySelector("i").classList.add("fa-bars");
        }
      });
    });
  }

  // Optional: Smooth scroll for internal links (if not using CSS scroll-behavior)
  // const internalLinks = document.querySelectorAll('a[href^="#"]');
  // internalLinks.forEach(link => {
  //   link.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     const targetId = this.getAttribute('href');
  //     const targetElement = document.querySelector(targetId);
  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop - (document.querySelector('.site-header').offsetHeight), // Adjust for fixed header
  //         behavior: 'smooth'
  //       });
  //     }
  //   });
  // });

  // Portfolio filter functionality 
  const filterButtons = document.querySelectorAll(".filter-button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      const filterValue = button.textContent.toLowerCase(); // e.g., "all", "design"

      portfolioItems.forEach((item) => {
        const tags = item.querySelectorAll(".portfolio-tag");
        let itemMatchesFilter = false;

        if (filterValue === "all") {
          itemMatchesFilter = true;
        } else {
          tags.forEach((tag) => {
            if (tag.textContent.toLowerCase() === filterValue) {
              itemMatchesFilter = true;
            }
          });
        }

        if (itemMatchesFilter) {
          item.style.display = "flex"; // Show item
        } else {
          item.style.display = "none"; // Hide item
        }
      });
    });
  });
});
