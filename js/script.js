let links = document.querySelectorAll('a');

for (let elem of links) {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        elem.parentElement.nextElementSibling.classList.toggle('active');
    });
}
