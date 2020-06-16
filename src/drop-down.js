const dropdown = Array.from(document.querySelectorAll('.dropdown'));

function controlMenu(e) {
 const selection = e.target.querySelector('.dropdown-list')
 selection.classList.toggle("active");
}

dropdown.forEach(element => {
    element.addEventListener('mouseenter', controlMenu)
    element.addEventListener('mouseleave', controlMenu)
});