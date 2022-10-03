// side menu for mobile devices
var sideMenu = document.getElementById('#sidemenu');

function openmenu() {
    sideMenu.style.right = '0'; // whenever right is 0, menu will be visible
}

function closemenu() {
    sideMenu.style.right = "-200px";
}