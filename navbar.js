/// controls the burger menu toggle and expands the menu when clicked 


const classToggle=()=> {
  const navs = document.querySelectorAll('.Navbar__Items')
  nav.forEach(nav => nav.classList.toggle('Navbar__ToggleShow')); 
  document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
}

// document.querySelector('.Navbar__Link-toggle')
//   .addEventListener('click', classToggle); // on click it calls and runs the classtoggle function when the screen is a mobile