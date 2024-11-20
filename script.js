// Select the body and buttons for theme and navigation toggling
const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

// Function to add theme classes
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Retrieve saved theme settings from localStorage
const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Apply saved theme settings
if (getBodyTheme && getBtnTheme) {
  addThemeClass(getBodyTheme, getBtnTheme);
}

// Function to check if the current theme is dark
const isDark = () => body.classList.contains('dark');

// Function to set the theme
const setTheme = (bodyClass, btnClass) => {
  // Remove previous theme classes
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  // Add new theme classes
  addThemeClass(bodyClass, btnClass);

  // Save new theme settings to localStorage
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Toggle between light and dark themes
const toggleTheme = () => {
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');
};

// Add event listener for theme toggle button
btnTheme.addEventListener('click', toggleTheme);

// Function to toggle the navigation menu display
const toggleNavMenu = () => {
  const navUl = document.querySelector('.nav__list');
  btnHamburger.classList.toggle('fa-bars');
  btnHamburger.classList.toggle('fa-times');
  navUl.classList.toggle('display-nav-list');
};

// Add event listener for navigation menu toggle button
btnHamburger.addEventListener('click', toggleNavMenu);

// Function to handle scroll-to-top button visibility
const handleScroll = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  const scrollPosition = document.documentElement.scrollTop || body.scrollTop;

  // Show button when scrolling down past 500px
  if (scrollPosition > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

// Add scroll event listener for scroll-to-top functionality
document.addEventListener('scroll', handleScroll);

// Add click event listener to scroll-to-top button
document.querySelector('.scroll-top a').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});