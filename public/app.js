function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('hidden');
  sidebar.classList.add('lg:w-[300px]', 'w-full'); // Menyesuaikan untuk layar kecil dan besar
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('hidden');
  sidebar.classList.remove('lg:w-[300px]', 'w-full');
}


// Scroll to Top functionality
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollToTopButton.classList.add('visible');
          scrollToTopButton.classList.remove('hidden');
      } else {
          scrollToTopButton.classList.add('hidden');
          scrollToTopButton.classList.remove('visible');
      }
  });

  // Scroll to top when button is clicked
  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

