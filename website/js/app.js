// Global Variables

let sections = Array.from(document.querySelectorAll('section'));
const navList = document.getElementById('navbar__list');

// Helper Functions 

function isInViewport(element) {
    const cords = element.getBoundingClientRect();
    return (
        cords.top >= 0 &&
        cords.left >= 0 &&
        cords.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        cords.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Main Functions

// creates nav bar dynamically
function createNavBar() {
    for (let i = 1; i <= sections.length; i++) {
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'navbar__elements');
        listItem.innerHTML = `<a href="#section${i}">Section ${i}</a>`;
        navList.appendChild(listItem);
    }
}

// Events

createNavBar();

document.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (isInViewport(section.firstElementChild.firstElementChild.nextElementSibling)) {
            section.classList.add("active")
        } else {
            section.classList.remove("active")
        }
    })
})
