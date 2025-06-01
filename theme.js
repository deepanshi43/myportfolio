
  // Apply saved theme on page load
  document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.body.classList.add("dark-mode");
    }

    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDarkMode = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  });

