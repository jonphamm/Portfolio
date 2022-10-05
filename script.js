// responsive side menu open/close for mobile devices //
let sideMenu = document.getElementById('side-menu');
function openmenu() {
    sideMenu.style.right = '0'; // whenever right is 0, menu will be visible
}

function closemenu() {
    sideMenu.style.right = "-200px";
}
