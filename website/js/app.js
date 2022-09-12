// Global Variables

let sections = Array.from(document.querySelectorAll('section'));
const navList = document.getElementById('navbar__list');

// Helper Functions 

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
