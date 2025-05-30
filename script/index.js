  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").slice(1); // removes the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;

          window.scrollTo({
            top: offsetTop - 80, // adjust for fixed header height
            behavior: "smooth"
          });

          // Close mobile menu if it's open
          const navContainer = document.querySelector(".nav-links");
          if (navContainer.classList.contains("active")) {
            navContainer.classList.remove("active");
          }
        }
      });
    });
  });

