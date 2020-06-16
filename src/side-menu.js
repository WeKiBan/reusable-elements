const hamburgerIcon = document.querySelector('.icon');
const sideMenu = document.querySelector('.side-menu')

function controlSideMenu(){
    sideMenu.classList.toggle('open');
    hamburgerIcon.classList.toggle('active')
}

hamburgerIcon.addEventListener('click', controlSideMenu);

export { controlSideMenu }