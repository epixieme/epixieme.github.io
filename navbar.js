/// controls the burger menu toggle and expands the menu when clicked 


const toggleBurgerMenu=()=> {
  const navs = document.querySelectorAll('.Navbar__Items')
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow')); 

}

const callToggleBurgerMenu= document.querySelector('.Navbar__Link-toggle').addEventListener('click', callToggleBurgerMenu);
// document.querySelector('.Navbar__Link-toggle')
//   .addEventListener('click', classToggle); // on click it calls and runs the classtoggle function when the screen is a mobile