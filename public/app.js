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

