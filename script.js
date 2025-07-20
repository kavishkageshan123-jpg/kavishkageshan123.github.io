document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded!");
});
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const topOffset = targetSection.offsetTop;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  });
});
