function resumeMenu() {
  let menuNav = document.getElementById("myTopnav");
  if (menuNav.className === "topnav") {
    menuNav.className += " responsive";
  } else {
    menuNav.className = "topnav";
  }
}
