const toggleBtn = document.getElementById('theme-toggle');

// On page load, check localStorage and set theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '🌙'; // show moon if dark mode is on
} else {
  toggleBtn.textContent = '☀️'; // sun for light mode
}

// Toggle mode on click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark'); // save preference
  } else {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light'); // save preference
  }
});
